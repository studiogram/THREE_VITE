// import {
//   BoxGeometry,
//   Clock,
//   Mesh,
//   MeshBasicMaterial,
//   PerspectiveCamera,
//   Scene,
//   WebGLRenderer,
// } from "three";

import "./styles.css";
// import { getColor } from "./helpers/colors";
// import { OrbitControls } from "three/examples/jsm/Addons.js";
import { AxesHelper, Scene } from "three";
import { ThreeRenderer } from "./renderers/three.renderer";
import { CubeMesh } from "./meshes/cube.mesh";
import { ThreeCamera } from "./cameras/three.camera";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import { Pane } from "tweakpane";

const canvas = document.querySelector("canvas");
if (canvas) {
  const renderer = new ThreeRenderer(canvas);
  const camera = new ThreeCamera(canvas);
  const scene = new Scene();
  const cube = new CubeMesh();
  scene.add(cube);

  const axesHelper = new AxesHelper(5);
  scene.add(axesHelper);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;

  renderer.render(scene, camera);

  window.addEventListener("resize", () => {
    camera.resize();
    renderer.resize();
  });

  const pane = new Pane();
  const PARAMS = {
    rotation: 0,
  };

  pane.addBinding(PARAMS, "rotation", {
    min: 0,
    max: 1,
  });

  // let mouseX = 0,
  //   mouseY = 0;

  // Track mouse movement
  // window.addEventListener("mousemove", (event) => {
  //   mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  //   mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  // });

  const animate = () => {
    // cube.animate();

    // cube.rotation.x = PARAMS.rotation;
    cube.rotation.z = PARAMS.rotation;

    // camera.update(scene);
    renderer.render(scene, camera);
    // renderer.render(scene, camera);
    // controls.update();
  };

  renderer.setAnimationLoop(animate);
}

// const canvas = document.querySelector("canvas");
// if (canvas) {
//   const renderer = new WebGLRenderer({
//     canvas: canvas,
//     antialias: true,
//     alpha: true,
//   });
//   console.log(window.devicePixelRatio);
//   renderer.setPixelRatio(window.devicePixelRatio);
//   // renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setSize(canvas.clientWidth, canvas.clientHeight);

//   const scene = new Scene();
//   const camera = new PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   camera.position.z = 5;

//   const controls = new OrbitControls(camera, renderer.domElement);

//   const geometry = new BoxGeometry();
//   // const material = new MeshBasicMaterial({ color: 0x00ff00 });
//   const material = new MeshBasicMaterial({ color: getColor(0, 0, 255) });
//   const cube = new Mesh(geometry, material);
//   scene.add(cube);

//   renderer.render(scene, camera);

//   window.addEventListener("resize", () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//   });

//   console.log("px ratio: ", renderer.getPixelRatio());

//   // function animate() {
//   //   requestAnimationFrame(animate);
//   //   // console.log("a");

//   //   // cube.rotation.x += 0.02;
//   //   // cube.rotation.y += 0.03;

//   //   // if (textMesh1) {
//   //   //   // wait for textMesh1 to be created asynchronously
//   //   //   textMesh1.rotation.z += 0.002;
//   //   //   textMesh1.rotation.x += 0.002;
//   //   // }

//   //   renderer.render(scene, camera);
//   //   controls.update();
//   // }
//   // animate();

//   function animate() {
//     cube.rotation.x += 0.02;
//     cube.rotation.y += 0.03;
//     renderer.render(scene, camera);
//     controls.update();
//   }

//   renderer.setAnimationLoop(animate);
// }
