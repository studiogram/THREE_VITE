import { PerspectiveCamera, Scene } from "three";
import { MouseEvents } from "../events/mouse.events";

export class ThreeCamera extends PerspectiveCamera {
  htmlElement: HTMLCanvasElement;
  constructor(htmlElement: HTMLCanvasElement) {
    super(45, window.innerWidth / window.innerHeight, 0.1, 100.0);
    this.position.z = 5;
    this.htmlElement = htmlElement;
    this.setElement();
  }

  setElement() {
    this.aspect = window.innerWidth / window.innerHeight;
    this.updateProjectionMatrix();
  }

  resize() {
    this.setElement();
  }

  update(scene: Scene) {
    this.position.x = MouseEvents.mouseX * 2;
    this.position.y = MouseEvents.mouseY * 3;
    this.lookAt(scene.position);
  }
}
