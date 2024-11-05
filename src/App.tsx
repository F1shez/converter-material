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

  const [waitConvert, setWaitConvert] = createSignal(false);

  function convertMaterial(albedoTexture: Texture, reflectionTexture: Texture, glossinesTexture: Texture, needConvertGlossines: boolean = true) {
    setWaitConvert(true);
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

      setWaitConvert(false);
      setShowViewer(true);
    })
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
        zip.file(`image${i + 1}.png`, await Promise.resolve(new Promise((resolve, reject) => {
          canvas.toBlob((blob) => resolve(blob), 'image/png', 1.0);
        })), { binary: true });
      }
    }

    const content = await zip.generateAsync({ type: 'blob' });
    return content;
  }

  return (
    <>
      {waitConvert() &&
        <div class='absolute opacity-75 w-full h-full z-50 bg-slate-100 flex items-center justify-center'>
          <svg aria-hidden="true" class="inline w-56 h-56 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <div class='absolute w-full h-full flex items-center justify-center text-center'>
            <span>Converting...</span>
          </div>
        </div>}

      {!showViewer() && <MapSelectionForConversion viewer={viewer} onConvert={convertMaterial} />}

      {showViewer() && <div class="flex absolute w-full bottom-8 justify-center items-center">
        <button class=" bg-slate-500 z-40 p-2 text-center rounded-md text-white" onclick={downloadMaps}>Download maps</button>
      </div>}
    </>
  )
}

export default App
