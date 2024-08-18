import { createSignal, onMount } from 'solid-js';
import { ConverterViewer } from './ConverterViewer';
import { SRGBColorSpace, Texture, TextureLoader } from 'three';

import COL from '../public/specular/ChainmailCopperRoundedThin001_COL_4K_SPECULAR.jpg';
import REFLECTION from '../public/specular/ChainmailCopperRoundedThin001_REFL_4K_SPECULAR.jpg';
import GLOSS from '../public/specular/ChainmailCopperRoundedThin001_GLOSS_4K_SPECULAR.jpg';
import { convertGlossToRough, convertSpecToPBR } from './PBRConvert';

function App() {

  let viewer = new ConverterViewer();
  const imageLoader = new TextureLoader();


  //specular/glossiness workflof

  const [albedoTexture, setAlbedoTexture] = createSignal<Texture>();
  const [reflectionTexture, setReflectionTexture] = createSignal<Texture>();
  const [glossTexture, setGlossTexture] = createSignal<Texture>();

  //metalic/roughness workflow

  const [albedoTexturePBR, setAlbedoTexturePBR] = createSignal<Texture>();
  const [roughnessTexturePBR, setRoughnessTexturePBR] = createSignal<Texture>();
  const [metalnessTexturePBR, setMetalnessTexturePBR] = createSignal<Texture>();

  onMount(() => {
    imageLoader.load(COL, (texture) => {
      texture.colorSpace = SRGBColorSpace;
      setAlbedoTexture(texture);
      viewer.setDiffuseTexture(texture);
    })



    imageLoader.load(REFLECTION, (texture) => {
      texture.colorSpace = SRGBColorSpace;
      setReflectionTexture(texture);
      viewer.setReflectionTexture(texture);
    })



    imageLoader.load(GLOSS, (texture) => {
      setGlossTexture(texture);
      viewer.setGlossinesinesTexture(texture);
    })

  })

  function convertMaterial() {
    convertSpecToPBR(albedoTexture()?.image, reflectionTexture()?.image).then((result) => {
      console.log(result);
      imageLoader.load(result.baseColor.src, (texture) => {
        texture.colorSpace = SRGBColorSpace;
        setAlbedoTexturePBR(texture);
        viewer.setAlbdeoTexturePBR(texture);
      })

      imageLoader.load(result.metalic.src, (texture) => {
        setMetalnessTexturePBR(texture);
        viewer.setMetalnessTexturePBR(texture);
      })
    })

    const roughnessImage = convertGlossToRough(glossTexture()?.image)
    imageLoader.load(roughnessImage.src, (texture) => {
      setRoughnessTexturePBR(texture);
      viewer.setRoughnessTexturePBR(texture);
    })
  }

  return (
    <>
      <div class="flex z-50 absolute">

        <div>albedo texture
          {albedoTexture() && <img class="w-16" src={albedoTexture()!.image.src} alt="" />}
          <input type="file" src="" alt="" accept=".jpeg, .jpg, .png" />
        </div>

        <div>metalness texture
          {reflectionTexture() && <img class="w-16" src={reflectionTexture()!.image.src} alt="" />}
          <input type="file" src="" alt="" accept=".jpeg, .jpg, .png" />
        </div>

        <div>glossines texture
          {glossTexture() && <img class="w-16" src={glossTexture()!.image.src} alt="" />}
          <input type="file" src="" alt="" accept=".jpeg, .jpg, .png" />
        </div>

        <div>diffuse texture
          {albedoTexturePBR() && <img class="w-16" src={albedoTexturePBR()!.image.src} alt="" />}
        </div>

        <div>metallic texture
          {metalnessTexturePBR() && <img class="w-16" src={metalnessTexturePBR()!.image.src} alt="" />}

        </div>

        <div>roughness texture
          {roughnessTexturePBR() && <img class="w-16" src={roughnessTexturePBR()!.image.src} alt="" />}
        </div>
        <button class="absolute bottom-0 right-0 w-16 h-8 bg-blue-300" onclick={convertMaterial}>Convert</button>
      </div>
    </>
  )
}

export default App
