import {
  LinearToneMapping,
  Mesh,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Texture,
  UniformsLib,
  UniformsUtils,
  WebGLRenderer,
  Object3D,
  PMREMGenerator,
  AgXToneMapping,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

import vertexShader from "./vertexCustom.txt?raw";

import fragmentShader from "./fragmentCustom.txt?raw";

interface CustomMaterial extends ShaderMaterial {
  envMap: Texture; // Adjust the type as needed
}

export class ConverterViewer {
  private scenes: Scene[] = [];
  public readonly renderer: WebGLRenderer;
  private scene: Scene = new Scene();
  private camera: PerspectiveCamera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  private materialSpecGloss: ShaderMaterial;
  private materialPbr: MeshPhysicalMaterial = new MeshPhysicalMaterial({
    metalness: 1.0,
    roughness: 1.0,
    transparent: true,
  });

  private contentElement = document.getElementById("content") as HTMLElement;

  constructor() {
    setTimeout(() => {
      console.log(this.materialPbr.defines);
    }, 10000);

    const canvas = document.getElementById("c") as HTMLCanvasElement;
    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: canvas,
      alpha: true,
    });

    this.renderer.toneMapping = LinearToneMapping;

    this.setStyleCanvas(this.renderer.domElement);

    // init shader Specular/Glossines
    var uniforms = UniformsUtils.merge([
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
        envMap: { value: null },
        roughness: { value: 1.0 },
        specularValue: { value: 0.0 },
        envMapIntensity: { value: 1 },
        glossinessMap: { value: null },
      },
    ]);

    this.materialSpecGloss = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      lights: true,
      defines: {
        USE_MAP: "",
        USE_UV: "",
        MAP_UV: "vUv",
        // USE_NORMALMAP: "",
        NORMALMAP_UV: "vUv",
        // USE_AOMAP: "",
        // AOMAP_UV: "vUv",
        USE_SPECULAR: "",
        USE_SPECULARMAP: "",
        SPECULARMAP_UV: "vUv",
        USE_ROUGHNESSMAP: "",
        ROUGHNESSMAP_UV: "vUv",
        USE_LIGHTMAP: "",
        LIGHTMAP_UV: "vUv",
        USE_FOG: "",
        USE_SHADOWMAP: "",
        USE_ENVMAP: "",
        STANDARD: "",
      },
    });

    this.materialSpecGloss.needsUpdate = true;
    //

    const sphere1 = new SphereGeometry(0.5, 32, 16);
    const mesh1 = new Mesh(sphere1, this.materialSpecGloss);

    const sphere2 = new SphereGeometry(0.5, 32, 16);
    const mesh2 = new Mesh(sphere2, this.materialPbr);

    this.scene.add(mesh1, mesh2);

    this.createScene("Specular/glossiness workflow", mesh1);
    this.createScene("Converted to Metalness/roughness workflow", mesh2);

    this.camera.position.z = 100;

    this.renderer.toneMapping = AgXToneMapping;
    this.renderer.toneMappingExposure = 1;

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    window.addEventListener("resize", () => this.updateSize());
    this.updateSize();
    this.renderer.setAnimationLoop(() => this.animate());
  }

  private setStyleCanvas(canvas: HTMLCanvasElement) {
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
  }

  private createScene(name: string, obj: Scene | Object3D) {
    const scene = new Scene();

    const element = document.createElement("div");
    element.className = "list-item";

    const sceneElement = document.createElement("div");
    element.appendChild(sceneElement);

    const descriptionElement = document.createElement("div");
    descriptionElement.innerText = name;
    element.appendChild(descriptionElement);

    scene.userData.element = sceneElement;
    this.contentElement.appendChild(element);

    const camera = new PerspectiveCamera(50, 1, 1, 10);
    camera.position.z = 2;
    scene.userData.camera = camera;

    const controls = new OrbitControls(
      scene.userData.camera,
      scene.userData.element
    );

    controls.minDistance = 2;
    controls.maxDistance = 5;
    controls.enablePan = false;
    controls.enableZoom = false;
    scene.userData.controls = controls;

    scene.add(obj);

    const scope = this;

    new RGBELoader().load(
      "https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr",
      function (texture) {
        const pmremGenerator = new PMREMGenerator(scope.renderer);
        pmremGenerator.compileEquirectangularShader();

        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scope.materialSpecGloss.uniforms.envMap.value = envMap;
        (scope.materialSpecGloss as CustomMaterial).envMap = envMap;
        scope.materialSpecGloss.needsUpdate = true;
        scene.environment = envMap;

        pmremGenerator.dispose();
        texture.dispose();
      }
    );

    this.scenes.push(scene);
  }

  private updateSize() {
    const canvas = this.renderer.domElement;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      this.renderer.setSize(width, height, false);
    }
  }

  convertMaterial() {}

  public setSpecularValue() {}

  public setDiffuseTexture(texture: Texture) {
    this.materialSpecGloss.uniforms.map.value = texture;
    this.materialSpecGloss.needsUpdate = true;
  }

  public setGlossinesValue() {}

  public setReflectionTexture(texture: Texture) {
    this.materialSpecGloss.uniforms.specularMap.value = texture;
    this.materialSpecGloss.uniforms.specularValue.value = 1.0;

    this.materialSpecGloss.needsUpdate = true;
  }

  public setGlossinesinesTexture(texture: Texture) {
    this.materialSpecGloss.uniforms.glossinessMap.value = texture;
    this.materialSpecGloss.needsUpdate = true;
  }

  public setAlbdeoTexturePBR(texture: Texture) {
    this.materialPbr.map = texture;
    this.materialPbr.needsUpdate = true;
  }

  public setMetalnessTexturePBR(texture: Texture) {
    this.materialPbr.metalnessMap = texture;
    this.materialPbr.metalness = 1.0;
    this.materialPbr.needsUpdate = true;
  }

  public setRoughnessTexturePBR(texture: Texture) {
    this.materialPbr.roughnessMap = texture;
    this.materialPbr.roughness = 1.0;
    this.materialPbr.needsUpdate = true;
  }

  private animate() {
    this.renderer.domElement.style.transform = `translateY(${window.scrollY}px)`;

    this.renderer.setClearColor(0xf1f5f9);
    this.renderer.setScissorTest(false);
    this.renderer.clear();

    this.renderer.setClearColor(0xf1f5f9);
    this.renderer.setScissorTest(true);

    const scope = this;

    this.scenes.forEach(function (scene) {
      // get the element that is a place holder for where we want to
      // draw the scene
      const element = scene.userData.element;

      // get its position relative to the page's viewport
      const rect = element.getBoundingClientRect();

      // check if it's offscreen. If so skip it
      if (
        rect.bottom < 0 ||
        rect.top > scope.renderer.domElement.clientHeight ||
        rect.right < 0 ||
        rect.left > scope.renderer.domElement.clientWidth
      ) {
        return; // it's off screen
      }

      // set the viewport
      const width = rect.right - rect.left;
      const height = rect.bottom - rect.top;
      const left = rect.left;
      const bottom = scope.renderer.domElement.clientHeight - rect.bottom;

      scope.renderer.setViewport(left, bottom, width, height);
      scope.renderer.setScissor(left, bottom, width, height);

      const camera = scene.userData.camera;

      scope.renderer.render(scene, camera);
    });
  }
}
