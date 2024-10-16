import { createEffect, createSignal } from "solid-js";
import { Texture, TextureLoader } from "three";


interface TextureSlotProps {
    canEdit?: boolean;
    nameSlot: string;
    texture?: Texture;
    setTexture: (texture: Texture) => void;
}
export function TextureSlot(props: TextureSlotProps) {

    const textureLoader = new TextureLoader();
    const [texture, setTexture] = createSignal<Texture | null>(props.texture || null, { equals: false });

    createEffect(() => {
        if (props.texture)
            setTexture(props.texture);
    })

    function loadTexture() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.addEventListener('change', (e: any) => {
            const file = e.target?.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    textureLoader.load(e.target?.result as string, (texture) => {
                        setTexture(texture);
                        props.setTexture(texture);
                    })
                };
                reader.readAsDataURL(file);
            }
        });

        input.click();
    }

    createEffect(() => {
        console.log(texture());
    });

    return (
        <div>
            <div class="pl-4 border-l-4 border-indigo-500">{props.nameSlot} texture
                <div class="w-12 h-12 bg-black overflow-hidden" onclick={() => props.canEdit && loadTexture()}>
                    {texture()?.image?.src && <img class="w-full h-full" src={texture()?.image.src} alt="" />}
                </div>
            </div>
        </div>
    )
}
