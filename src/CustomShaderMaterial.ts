import { ShaderMaterial, UniformsLib, UniformsUtils } from "three";
import { fragmentShader, vertexShader } from "./SpecGlossShader";

export class CustomShaderMaterial extends ShaderMaterial {
  constructor(parameters?: any) {
    // Создаем объект defines на основе переданных параметров
    const defines: any = {};

    if (parameters && parameters.map) defines.USE_MAP = "";
    if (parameters && parameters.normalMap) defines.USE_NORMALMAP = "";
    if (parameters && parameters.aoMap) defines.USE_AOMAP = "";
    // Добавьте другие условия для ваших параметров

    // Объединяем uniforms
    const uniforms = UniformsUtils.merge([
      UniformsLib.common,
      //   UniformsLib.aoMap,
      //   UniformsLib.normalMap,
      // Добавьте другие необходимые uniforms
      {
        map: { value: parameters.map || null },
        // normalMap: { value: parameters.normalMap || null },
        // aoMap: { value: parameters.aoMap || null },
        // Добавьте другие uniforms
      },
    ]);

    // Вызываем конструктор ShaderMaterial с подготовленными параметрами
    super({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: uniforms,
      defines: defines,
      // передаем остальные параметры
      ...parameters,
    });
  }
}
