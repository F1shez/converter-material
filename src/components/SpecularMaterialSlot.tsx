import { createEffect, createSignal } from "solid-js";
import { ShaderMaterial, Texture } from "three";
import { TextureSlot } from "./TextureSlot";

interface MaterialProps {
    material: ShaderMaterial;
    needsUpdate: boolean
}

export function SpecularMaterialSlot(props: MaterialProps) {

    const [diffuse, setDiffuse] = createSignal<Texture | null>(props.material.uniforms.map.value || null);
    const [reflection, setReflection] = createSignal<Texture | null>(props.material.uniforms.specularMap.value || null);
    const [glossiness, setGlossiness] = createSignal<Texture | null>(props.material.uniforms.glossinessMap.value || null);

    createEffect(() => {
        props.needsUpdate // call update
        props.material.needsUpdate = true;
        setDiffuse(props.material.uniforms.map.value || null);
        setReflection(props.material.uniforms.specularMap.value || null);
        setGlossiness(props.material.uniforms.glossinessMap.value || null);
    })

    createEffect(() => {
        props.material.uniforms.map.value = diffuse();
        props.material.needsUpdate = true;
    })

    createEffect(() => {
        props.material.uniforms.specularMap.value = reflection();
        props.material.uniforms.specularValue.value = 1.0;
        props.material.needsUpdate = true;
    })

    createEffect(() => {
        props.material.uniforms.glossinessMap.value = glossiness();
        props.material.needsUpdate = true;
    })

    return (
        <div>
            <div class="pl-4 border-l-4 border-indigo-500">Specular/glossines workflof material</div>

            <TextureSlot canEdit={true} nameSlot="Diffuse" texture={diffuse() || undefined} setTexture={setDiffuse} />

            <TextureSlot canEdit={true} nameSlot="Reflection" texture={reflection() || undefined} setTexture={setReflection} />

            <TextureSlot canEdit={true} nameSlot="Glossiness" texture={glossiness() || undefined} setTexture={setGlossiness} />
        </div>
    )
}