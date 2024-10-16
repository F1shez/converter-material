import { createEffect, createSignal } from "solid-js";
import { MeshStandardMaterial, ShaderMaterial, Texture } from "three";
import { TextureSlot } from "./TextureSlot";

interface MaterialProps {
    material: MeshStandardMaterial;
    needUpdate: boolean;
}

export function MetalicRoughnesSlot(props: MaterialProps) {
    const [albedo, setAlbedo] = createSignal<Texture | null>(
        null, { equals: false }
    );
    const [metalness, setMetalness] = createSignal<Texture | null>(
        null, { equals: false }
    );
    const [roughness, setRoughness] = createSignal<Texture | null>(
        null, { equals: false }
    );

    createEffect(() => {
        props.needUpdate;
        setAlbedo(props.material.map);
        setMetalness(props.material.metalnessMap);
        setRoughness(props.material.roughnessMap);
        // setAlbedo(null);
    });

    return (
        <div>
            <div class="pl-4 border-l-4 border-indigo-500">
                Metalness/roughness workflof material
            </div>

            <TextureSlot
                nameSlot="Albedo"
                texture={albedo() || undefined}
                setTexture={setAlbedo}
            />

            <TextureSlot
                nameSlot="Metalic"
                texture={metalness() || undefined}
                setTexture={setMetalness}
            />

            <TextureSlot
                nameSlot="Roughness"
                texture={roughness() || undefined}
                setTexture={setRoughness}
            />
        </div>
    );
}
