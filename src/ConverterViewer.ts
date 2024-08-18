import {
  AmbientLight,
  Color,
  DirectionalLight,
  LinearToneMapping,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Texture,
  TextureLoader,
  UniformsLib,
  UniformsUtils,
  WebGLRenderer,
  SRGBColorSpace,
  Object3D,
  HemisphereLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import vertexShader from "./vertexCustom.txt?raw";

import fragmentShader from "./fragmentCustom.txt?raw";

import COL from "../public/metalness/ChainmailCopperRoundedThin001_COL_4K_METALNESS.jpg";
import METALNESS from "../public/metalness/ChainmailCopperRoundedThin001_METALNESS_4K_METALNESS.png";
import ROUGHNESS from "../public/metalness/ChainmailCopperRoundedThin001_ROUGHNESS_4K_METALNESS.jpg";
import AO from "../public/metalness/ChainmailCopperRoundedThin001_AO_4K_METALNESS.jpg";
import NRM from "../public/metalness/ChainmailCopperRoundedThin001_NRM_4K_METALNESS.jpg";
import MASK from "../public/metalness/ChainmailCopperRoundedThin001_MASK_4K_METALNESS.png";

const imageLoader = new TextureLoader();
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
    aoMap: imageLoader.load(AO),
    normalMap: imageLoader.load(NRM),
    alphaMap: imageLoader.load(MASK),
    transparent: true,
  });
  private referenceMaterial: MeshStandardMaterial = new MeshStandardMaterial({
    metalness: 1.0,
    roughness: 1.0,
    map: imageLoader.load(COL, (texture) => {
      texture.colorSpace = SRGBColorSpace;
      this.referenceMaterial.needsUpdate = true;
    }),
    // map: imageLoader.load(COLSpec),
    metalnessMap: imageLoader.load(METALNESS),
    roughnessMap: imageLoader.load(ROUGHNESS),
    aoMap: imageLoader.load(AO),
    normalMap: imageLoader.load(NRM),
    alphaMap: imageLoader.load(MASK),
    transparent: true,
  });

  private contentElement = document.getElementById("content") as HTMLElement;

  constructor() {
    setTimeout(() => {
      console.log(this.referenceMaterial.defines);
      console.log(this.materialPbr.defines);
    }, 10000);

    const canvas = document.getElementById("c") as HTMLCanvasElement;
    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: canvas,
    });

    this.renderer.toneMapping = LinearToneMapping;
    this.scene.background = new Color(0xffffff);

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
        emissive: { value: /*@__PURE__*/ new Color(0x000000) },
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

    this.materialSpecGloss.uniforms.normalMap.value = imageLoader.load(NRM);
    this.materialSpecGloss.uniforms.aoMap.value = imageLoader.load(AO);
    this.materialSpecGloss.uniforms.alphaMap.value = imageLoader.load(MASK);
    this.materialSpecGloss.needsUpdate = true;

    //for show full shader

    // function parseIncludes(string: string): string {
    //   const includePattern = /#include +<([\w\d./]+)>/g;
    //   function replace(match: string, include: string): string {
    //     const chunk = ShaderChunk[include as keyof typeof ShaderChunk];
    //     if (chunk === undefined) {
    //       throw new Error(`Can not resolve #include <${include}>`);
    //     }
    //     return parseIncludes(chunk);
    //   }
    //   return string.replace(includePattern, replace);
    // }

    // this.materialSpecGloss.onBeforeCompile = function (shader) {
    //   // Раскрываем все чанки в шейдерах
    //   const expandedVertexShader = parseIncludes(shader.vertexShader);
    //   const expandedFragmentShader = parseIncludes(shader.fragmentShader);

    //   console.log("Expanded Vertex Shader:", expandedVertexShader);
    //   console.log("Expanded Fragment Shader:", expandedFragmentShader);

    //   // Вы можете модифицировать шейдеры здесь, если необходимо
    // };

    //

    const sphere1 = new SphereGeometry(0.5, 32, 16);
    const mesh1 = new Mesh(sphere1, this.materialSpecGloss);

    const sphere2 = new SphereGeometry(0.5, 32, 16);
    const mesh2 = new Mesh(sphere2, this.materialPbr);

    const sphere3 = new SphereGeometry(0.5, 32, 16);
    const mesh3 = new Mesh(sphere3, this.referenceMaterial);

    this.scene.add(mesh1, mesh2, mesh3);

    this.createScene("Specular/glossiness workflow", mesh1);
    this.createScene("Converted", mesh2);
    this.createScene("Metalic/Roughness workflow/reference", mesh3);

    this.camera.position.z = 100;

    const ambientLight = new AmbientLight(0x7d7d7d, 10);
    this.scene.add(ambientLight);

    const dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 10, 10);
    this.scene.add(dirLight);

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
    scene.add(new HemisphereLight(0xaaaaaa, 0x444444, 3));

    const light = new DirectionalLight(0xffffff, 1.5);
    light.position.set(1, 1, 1);
    scene.add(light);

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
    // this.materialSpecGloss.uniforms.diffuse.value = new Color(0xff0000);
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

    this.renderer.setClearColor(0xffffff);
    this.renderer.setScissorTest(false);
    this.renderer.clear();

    this.renderer.setClearColor(0xe0e0e0);
    this.renderer.setScissorTest(true);

    const scope = this;

    this.scenes.forEach(function (scene) {
      // so something moves
      // scene.children[0].rotation.y = Date.now() * 0.001;

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

      //camera.aspect = width / height; // not changing in scope example
      //camera.updateProjectionMatrix();

      //scene.userData.controls.update();

      scope.renderer.render(scene, camera);
    });
  }
}
