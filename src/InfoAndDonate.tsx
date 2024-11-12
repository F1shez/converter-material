import { createSignal } from "solid-js"

export function InfoAndDonate() {
    const [showInfo, setShowInfo] = createSignal(false);

    function copyUsdtAddress(e: any) {
        navigator.clipboard.writeText(e.target.innerText);
    }

    return (
        <>{showInfo() && <div class="fixed w-screen h-screen top-0 left-0 z-40" onclick={() => { setShowInfo(false) }}></div>}
            <div class="fixed bottom-0 w-full z-50 md:right-12 md:w-56 justify-center items-center">
                <div class="flex items-center justify-center w-full">
                    <svg class="fill-slate-900 w-20" viewBox="0 0 159.70549 81.158867" version="1.1" id="svg1"
                        xmlns="http://www.w3.org/2000/svg" >
                        <g id="layer1" transform="translate(-24.901585,-100.69789)">
                            <path id="path"
                                d="m 152.76613,100.69789 c 0.1383,0.87592 1.18548,7.55248 -3.04477,13.12736 -2.96563,3.90829 -6.2216,5.59032 -7.7463,6.21254 a 79.992861,72.742897 0 0 0 -37.28971,-8.51214 79.992861,72.742897 0 0 0 -37.93774,8.85992 c -1.052116,-0.35534 -4.886069,-1.89375 -8.331792,-6.43475 -4.230253,-5.57488 -3.183595,-12.25092 -3.045292,-13.12684 0,0 -3.69118,2.49591 -7.059,8.42739 -2.818524,4.96404 -3.415164,10.2102 -3.438033,13.02711 -0.05234,6.44779 2.086956,11.47876 2.237589,11.82512 A 79.992861,72.742897 0 0 0 24.901585,181.85676 H 184.60708 a 79.992861,72.742897 0 0 0 -23.23269,-48.77377 c 0.65384,-1.79806 1.9297,-5.9522 1.88929,-10.93008 -0.0229,-2.81691 -0.62003,-8.06307 -3.43855,-13.02711 -3.36782,-5.93148 -7.059,-8.42791 -7.059,-8.42791 z m -24.29309,58.53441 a 5.3982387,5.3982387 0 0 1 5.39812,5.39812 5.3982387,5.3982387 0 0 1 -5.39812,5.39812 5.3982387,5.3982387 0 0 1 -5.39812,-5.39812 5.3982387,5.3982387 0 0 1 5.39812,-5.39812 z m -46.773888,0.19172 a 5.3982387,5.3982387 0 0 1 5.398637,5.39812 5.3982387,5.3982387 0 0 1 -5.398637,5.39812 5.3982387,5.3982387 0 0 1 -5.39812,-5.39812 5.3982387,5.3982387 0 0 1 5.39812,-5.39812 z" />
                        </g>
                    </svg>
                </div>
                <div class="bg-slate-200 rounded-t-lg" onclick={() => { setShowInfo(true); }}>
                    <h1 class="text-center pt-2 pl-1.5 pr-1.5">Hello, im notahero, if you want donate click here👈!</h1>
                    <div class="bg-slate-300 m-2 rounded-lg text-center mt-2 pt-2 pb-2">
                        <p class="">
                            My github is: <a href="https://github.com/F1shez" target="_blank">@F1shez</a>
                        </p>
                    </div>{
                        showInfo() &&
                        <>
                            <div class="bg-slate-300 m-2 rounded-lg text-center mt-2 pt-2 pb-2">
                                <div class="flex items-center justify-center w-full">
                                    <svg class="absolute h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#009393" rx="20"></rect><path fill="#fff" fill-rule="evenodd" d="M20.024 21.43c3.44 0 6.314-.582 7.017-1.359-.596-.659-2.754-1.178-5.494-1.32v1.641q-.737.039-1.523.038-.786 0-1.524-.038v-1.641c-2.739.142-4.898.661-5.494 1.32.704.777 3.578 1.358 7.018 1.358zm6.111-7.727v2.26h-4.588v1.568c3.223.168 5.642.857 5.66 1.681v1.719c-.018.825-2.437 1.512-5.66 1.68v3.847H18.5v-3.847c-3.223-.168-5.64-.855-5.658-1.68v-1.719c.018-.825 2.435-1.514 5.658-1.681v-1.567h-4.588v-2.261zm-14.028-3.598h16.108c.386 0 .74.203.932.532l4.693 8.058c.242.418.17.945-.177 1.284L20.747 32.588a1.083 1.083 0 0 1-1.51 0L6.335 19.996a1.05 1.05 0 0 1-.16-1.31l5.016-8.074a1.08 1.08 0 0 1 .916-.506z" clip-rule="evenodd"></path></svg>
                                    {/* <img class="h-32" src="./public/qr_code_usdt_trc20.png" alt="" /> */}
                                    <img class="h-32" src="./qr_code_usdt_trc20 1.png" alt="" />
                                </div>
                                <p class="text-center ml-1.5 mr-1.5">Scan QR-code for send USDT (only USDT TRC20).</p>
                            </div>
                            <div class="text-center bg-slate-300 m-2 rounded-lg mt-2 pt-2 pb-2">
                                <h1>Adress USDT TRC20</h1>
                                <p class="text-sm break-all cursor-pointer z-50 hover:bg-slate-400" onclick={copyUsdtAddress}>
                                    TJptwvU3tEJwALpnPK11udq6b3mmMhkCas
                                </p>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}
