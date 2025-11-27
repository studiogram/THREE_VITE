import { Scene, WebGLRenderer, PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { Cube } from "./Cube";
import { Pane } from "tweakpane";

export class App {
  camera!: PerspectiveCamera;
  renderer!: WebGLRenderer;
  controls!: OrbitControls;
  scene!: Scene;
  cube: Cube;
  canvas: HTMLCanvasElement;
  pane!: Pane;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.bindMethods();

    this.initPane();
    this.initRenderer();
    this.initScene();
    this.initCamera();

    this.events();

    this.cube = new Cube(this.pane);
    this.scene.add(this.cube.mesh);
    this.renderer.render(this.scene, this.camera);
  }

  bindMethods() {
    this.animate = this.animate.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  events() {
    window.addEventListener("resize", this.onResize);
  }

  initPane() {
    this.pane = new Pane();
  }

  initRenderer() {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      //   antialias: true,
      //   alpha: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  initCamera() {
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.camera.position.z = 5;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minAzimuthAngle = 0;
    this.controls.maxAzimuthAngle = 0;
    this.controls.minPolarAngle = 0;
    this.controls.maxPolarAngle = Math.PI * 2;
    this.controls.enablePan = false;
    this.controls.enableZoom = false;
    this.controls.enableRotate = true;
    this.controls.enableDamping = true; // amortissement
    this.controls.minDistance = 5;
    this.controls.maxDistance = 5;

    // this.fitCameraToScene();

    // Prevent trackpad zoom/gestures
    this.renderer.domElement.addEventListener("wheel", (e) => {
      e.preventDefault();
    });

    // this.renderer.domElement.addEventListener("gesturestart", (e) => {
    //   e.preventDefault();
    // });

    // this.renderer.domElement.addEventListener("gesturechange", (e) => {
    //   e.preventDefault();
    // });
    // this.controls.minPolarAngle = Math.PI / 2;
    // this.controls.maxPolarAngle = Math.PI / 2;
  }

  //   fitCameraToScene() {
  //     const box = new Box3().setFromObject(this.scene);
  //     const size = box.getSize(new Vector3()).length();
  //     const center = box.getCenter(new Vector3());

  //     // Calculate distance needed to fit the scene
  //     const fov = this.camera.fov * (Math.PI / 180);
  //     const distance = size / (2 * Math.tan(fov / 2));

  //     // Position camera
  //     this.camera.position.copy(center);
  //     this.camera.position.z = center.z + distance * 1.5; // Add some padding
  //     this.camera.lookAt(center);

  //     // Update controls target
  //     this.controls.target.copy(center);
  //     this.controls.update();
  //   }

  initScene() {
    this.scene = new Scene();
  }

  animate() {
    this.cube.animate();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }
}
