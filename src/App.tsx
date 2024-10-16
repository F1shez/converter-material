import { createSignal, onMount } from 'solid-js';
import { ConverterViewer } from './ConverterViewer';
import { MeshStandardMaterial, SRGBColorSpace, Texture, TextureLoader } from 'three';

import COL from '../public/specular/ChainmailCopperRoundedThin001_COL_4K_SPECULAR.jpg';
import REFLECTION from '../public/specular/ChainmailCopperRoundedThin001_REFL_4K_SPECULAR.jpg';
import GLOSS from '../public/specular/ChainmailCopperRoundedThin001_GLOSS_4K_SPECULAR.jpg';
import { convertGlossToRough, convertSpecToPBR } from './PBRConvert';
import { SpecularMaterial } from './SpecularMaterial';
import { SpecularMaterialSlot } from './components/SpecularMaterialSlot';
import { MetalicRoughnesSlot } from './components/MetalnessRoughnesSlot';

function App() {

  const specularMaterial = SpecularMaterial;
  const standardMaterial = new MeshStandardMaterial();

  let viewer = new ConverterViewer(specularMaterial, standardMaterial);
  const imageLoader = new TextureLoader();

  const [needsUpdateSpecularMaterial, setNeedsUpdateSpecularMaterial] = createSignal(false);
  const [needsUpdateStandardMaterial, setNeedsUpdateStandardMaterial] = createSignal(false);

  //specular/glossiness workflof

  const [albedoTexture, setAlbedoTexture] = createSignal<Texture>();
  const [reflectionTexture, setReflectionTexture] = createSignal<Texture>();
  const [glossTexture, setGlossTexture] = createSignal<Texture>();

  //metalic/roughness workflow

  const [albedoTexturePBR, setAlbedoTexturePBR] = createSignal<Texture>();
  const [roughnessTexturePBR, setRoughnessTexturePBR] = createSignal<Texture>();
  const [metalnessTexturePBR, setMetalnessTexturePBR] = createSignal<Texture>();

  const [albedoReferenceTexturePBR, setAlbedoReferenceTexturePBR] = createSignal<Texture>();
  const [roughnessReferenceTexturePBR, setRoughnessReferenceTexturePBR] = createSignal<Texture>();
  const [metalnessReferenceTexturePBR, setMetlnessReferenceTexturePBR] = createSignal<Texture>();

  onMount(() => {
    imageLoader.load(COL, (texture) => {
      texture.colorSpace = SRGBColorSpace;
      setAlbedoTexture(texture);
      viewer.setDiffuseTexture(texture);

      specularMaterial.uniforms.map.value = texture;
      setNeedsUpdateSpecularMaterial(prev => !prev);
      console.log("1");
    })

    imageLoader.load(REFLECTION, (texture) => {
      texture.colorSpace = SRGBColorSpace;
      setReflectionTexture(texture);
      viewer.setReflectionTexture(texture);

      specularMaterial.uniforms.specularMap.value = texture;
      setNeedsUpdateSpecularMaterial(prev => !prev);
      console.log("1");
    })

    imageLoader.load(GLOSS, (texture) => {
      setGlossTexture(texture);
      viewer.setGlossinesinesTexture(texture);

      specularMaterial.uniforms.glossinessMap.value = texture;
      setNeedsUpdateSpecularMaterial(prev => !prev);
      console.log("1");
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

      viewer.setSameTexturesPBR();
      setNeedsUpdateStandardMaterial(prev => !prev);
    })

    const roughnessImage = convertGlossToRough(glossTexture()?.image)
    imageLoader.load(roughnessImage.src, (texture) => {
      setRoughnessTexturePBR(texture);
      viewer.setRoughnessTexturePBR(texture);
    })

    // setSameTexturesPBR();
  }

  return (
    <>
      <div class="flex z-50 absolute">

        <SpecularMaterialSlot material={specularMaterial} needsUpdate={needsUpdateSpecularMaterial()} />

        <MetalicRoughnesSlot material={standardMaterial} needUpdate={needsUpdateStandardMaterial()} />

        <button class="absolute bottom-0 right-0 w-16 h-8 bg-blue-300" onclick={convertMaterial}>Convert</button>

        {/* <TextureSlot nameSlot='albedo' texture={albedoTexture()} setTexture={setAlbedoTexture} />

        <TextureSlot nameSlot='reflection' texture={reflectionTexture()} setTexture={setReflectionTexture} />

        <TextureSlot nameSlot='glossiness' texture={glossTexture()} setTexture={setGlossTexture} />

        <div class="pl-4 border-l-4 border-indigo-500">diffuse texture
          {albedoTexturePBR() && <img class="w-16" src={albedoTexturePBR()!.image.src} alt="" />}
        </div>

        <div class="pl-4 border-l-4 border-indigo-500">metallic texture
          {metalnessTexturePBR() && <img class="w-16" src={metalnessTexturePBR()!.image.src} alt="" />}
        </div>

        <div class="pl-4 border-l-4 border-indigo-500">roughness texture
          {roughnessTexturePBR() && <img class="w-16" src={roughnessTexturePBR()!.image.src} alt="" />}
        </div>

        <button class="absolute bottom-0 right-0 w-16 h-8 bg-blue-300" onclick={convertMaterial}>Convert</button>

        <div class="pl-4 border-l-4 border-indigo-500">reference albedo texture
          {albedoReferenceTexturePBR() && <img class="w-16" src={albedoReferenceTexturePBR()!.image.src} alt="" />}
        </div>

        <div class="pl-4 border-l-4 border-indigo-500">reference metalness texture
          {metalnessReferenceTexturePBR() && <img class="w-16" src={metalnessReferenceTexturePBR()!.image.src} alt="" />}
        </div>

        <div class="pl-4 border-l-4 border-indigo-500">reference roughness texture
          {roughnessReferenceTexturePBR() && <img class="w-16" src={roughnessReferenceTexturePBR()!.image.src} alt="" />}
        </div> */}
      </div>
    </>
  )
}

export default App
