import { createSignal, onMount, type Component } from 'solid-js';
import { ConverterViewer } from './ConverterViewer';
import { RepeatWrapping, SRGBColorSpace, Texture, TextureLoader } from 'three';
import JSZip from 'jszip';

import { convertGlossToRough, convertSpecToPBR } from './PBRConvert';
import { MapSelectionForConversion } from './pages/MapSelectionForConversion';

function App() {

  let viewer = new ConverterViewer();
  const imageLoader = new TextureLoader();
  const [showViewer, setShowViewer] = createSignal(false);

  const [albedoTexturePBR, setAlbedoTexturePBR] = createSignal<Texture>();
  const [roughnessTexturePBR, setRoughnessTexturePBR] = createSignal<Texture>();
  const [metalnessTexturePBR, setMetalnessTexturePBR] = createSignal<Texture>();

  function convertMaterial(albedoTexture: Texture, reflectionTexture: Texture, glossinesTexture: Texture, needConvertGlossines: boolean = true) {
    convertSpecToPBR(albedoTexture?.image, reflectionTexture?.image).then((result) => {
      console.log(result);
      imageLoader.load(result.baseColor.src, (texture) => {
        texture.colorSpace = SRGBColorSpace;
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        setAlbedoTexturePBR(texture);
        viewer.setAlbdeoTexturePBR(texture);
      })

      imageLoader.load(result.metalic.src, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        setMetalnessTexturePBR(texture);
        viewer.setMetalnessTexturePBR(texture);
      })
    })

    if (needConvertGlossines) {
      const roughnessImage = convertGlossToRough(glossinesTexture?.image);
      imageLoader.load(roughnessImage.src, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        setRoughnessTexturePBR(texture);
        viewer.setRoughnessTexturePBR(texture);
      });
    } else {
      const roughnessImage = glossinesTexture?.image;
      imageLoader.load(roughnessImage.src, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        setRoughnessTexturePBR(texture);
        viewer.setRoughnessTexturePBR(texture);
      });
    }
    setShowViewer(true);
  }

  function downloadMaps() {
    downloadArchives([albedoTexturePBR()?.image, metalnessTexturePBR()?.image, roughnessTexturePBR()?.image]);
  }

  async function downloadArchives(images: HTMLImageElement[]) {
    const blob = await createImageZip(images);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'images.zip';
    a.click();
    URL.revokeObjectURL(url);
  }

  async function createImageZip(images: HTMLImageElement[]): Promise<Blob> {
    const zip = new JSZip();
    for (let i = 0; i < images.length; i++) {
      const canvas = document.createElement('canvas');
      canvas.width = images[i].width;
      canvas.height = images[i].height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(images[i], 0, 0);
        zip.file(`image${i + 1}.png`, await new Promise((resolve, reject) => {
          canvas.toBlob((blob) => resolve(blob), 'image/png', 1.0);
        }), { binary: true });
      }
    }

    const content = await zip.generateAsync({ type: 'blob' });
    return content;
  }

  return (
    <>
      {!showViewer() && <MapSelectionForConversion viewer={viewer} onConvert={convertMaterial} />}

      {showViewer() && <div class="flex absolute w-full bottom-8 justify-center items-center">
        <button class=" bg-slate-500 z-50 p-2 text-center rounded-md text-white" onclick={downloadMaps}>Download maps</button>
      </div>}
    </>
  )
}

export default App
