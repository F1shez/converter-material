import { createSignal } from "solid-js";
import { RepeatWrapping, SRGBColorSpace, Texture, TextureLoader } from "three";
import { ConverterViewer } from "../ConverterViewer";

interface MapSelectionForConversionProps {
    onConvert: (albedoTexture: Texture, reflectionTexture: Texture, glossinesTexture: Texture) => void;
    viewer: ConverterViewer;
}
export function MapSelectionForConversion(props: MapSelectionForConversionProps) {

    //specular/glossiness workflof
    const [albedoTexture, setAlbedoTexture] = createSignal<Texture>();
    const [reflectionTexture, setReflectionTexture] = createSignal<Texture>();
    const [glossTexture, setGlossTexture] = createSignal<Texture>();
    const textureLoader = new TextureLoader();

    async function createNewTexture(e: Event): Promise<Texture> {
        return new Promise((resolve, reject) => {
            const element = e.currentTarget as HTMLInputElement;
            const files = element.files;
            console.log('change texture');
            if (FileReader && files && files.length > 0) {
                const reader = new FileReader();
                reader.readAsDataURL(files[0]);
                var fr = new FileReader();
                fr.onload = function () {
                    if (fr.result) {
                        textureLoader.load(fr.result as string, (texture: Texture) => {
                            texture.flipY = false;
                            texture.wrapS = RepeatWrapping;
                            texture.wrapT = RepeatWrapping;
                            resolve(texture);
                        });
                    }
                }
                fr.readAsDataURL(files[0]);
            }
        });
    }

    return (
        <div class="bg-slate-100 flex flex-col h-screen justify-center items-center relative z-50">
            <div class="flex space-x-48">
                <div class="flex flex-col">
                    <h2 class="flex">Albedo Texture</h2>
                    <div class="w-48 h-48 bg-slate-200 rounded-md overflow-hidden"
                        onClick={() => document.getElementById('albedoFileInput')?.click()}>
                        {albedoTexture()?.image?.src && <img class="w-48 h-48" src={albedoTexture()?.image?.src} alt="" />}
                        <input onchange={(e) => {
                            createNewTexture(e).then((texture) => {
                                setAlbedoTexture(texture);
                                texture.colorSpace = SRGBColorSpace;
                                props.viewer.setDiffuseTexture(texture);
                            })
                        }} id="albedoFileInput" class="hidden" type="file" accept=".jpeg, .jpg, .png" />
                        <div class="flex items-center justify-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h2 class="flex">Reflection Texture</h2>
                    <div class="w-48 h-48 bg-slate-200 rounded-md overflow-hidden"
                        onclick={() => document.getElementById('reflectionFileInput')?.click()}>
                        {reflectionTexture()?.image.src && <img class="w-48 h-48" src={reflectionTexture()?.image.src} alt="" />}
                        <input onchange={(e) => {
                            createNewTexture(e).then((texture) => {
                                setReflectionTexture(texture);
                                texture.colorSpace = SRGBColorSpace;
                                props.viewer.setReflectionTexture(texture);
                            })
                        }} id="reflectionFileInput" class="hidden" type="file" accept=".jpeg, .jpg, .png" />
                        <div class="flex items-center justify-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h2>Glossiness Texture</h2>
                    <div class="w-48 h-48 bg-slate-200 rounded-md overflow-hidden"
                        onclick={() => document.getElementById('glossinessFileInput')?.click()}>
                        {glossTexture()?.image.src && <img class="w-48 h-48" src={glossTexture()?.image.src} alt="" />}
                        <input onchange={(e) => {
                            createNewTexture(e).then((texture) => {
                                setGlossTexture(texture);
                                props.viewer.setGlossinesinesTexture(texture);
                            })
                        }} id="glossinessFileInput" class="hidden" type="file" accept=".jpeg, .jpg, .png" />
                        <div class="flex items-center justify-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex w-full justify-center mt-16">
                <button
                    onclick={() => {
                        const albedo = albedoTexture();
                        const reflection = reflectionTexture();
                        const gloss = glossTexture();

                        if (albedo && reflection && gloss) {
                            props.onConvert(albedo, reflection, gloss);
                        }
                    }}
                    class="bg-slate-600 text-white p-2 rounded-md">Convert Maps to Metalness/Roughness PBR</button>
            </div>
        </div>
    )
}