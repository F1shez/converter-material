import { Color, ShaderMaterial, UniformsLib, UniformsUtils } from "three";
import vertexShader from "./vertexCustom.txt?raw";
import fragmentShader from "./fragmentCustom.txt?raw";

const uniforms = UniformsUtils.merge([
  UniformsLib.common,
  UniformsLib.envmap,
  UniformsLib.aomap,
  UniformsLib.specularmap,
  UniformsLib.lightmap,
  UniformsLib.emissivemap,
  UniformsLib.bumpmap,
  UniformsLib.normalmap,
  UniformsLib.displacementmap,
  UniformsLib.roughnessmap,
  UniformsLib.metalnessmap,
  UniformsLib.fog,
  UniformsLib.lights,
  {
    emissive: { value: /*@__PURE__*/ new Color(0x000000) },
    roughness: { value: 1.0 },
    specularValue: { value: 0.0 },
    envMapIntensity: { value: 1 },
    glossinessMap: { value: null },
  },
]);

export const SpecularMaterial = new ShaderMaterial({
  uniforms: uniforms,
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  transparent: true,
  lights: true,
  defines: {
    USE_MAP: "",
    USE_UV: "",
    MAP_UV: "vUv",
    USE_NORMALMAP: "",
    NORMALMAP_UV: "vUv",
    USE_AOMAP: "",
    AOMAP_UV: "vUv",
    USE_SPECULAR: "",
    USE_SPECULARMAP: "",
    SPECULARMAP_UV: "vUv",
    USE_ROUGHNESSMAP: "",
    ROUGHNESSMAP_UV: "vUv",
    USE_LIGHTMAP: "",
    LIGHTMAP_UV: "vUv",
    USE_FOG: "",
    USE_SHADOWMAP: "",
    USE_ALPHAMAP: "",
    ALPHAMAP_UV: "vUv",
    USE_NORMALMAP_TANGENTSPACE: "",
  },
});

SpecularMaterial.needsUpdate = true;
