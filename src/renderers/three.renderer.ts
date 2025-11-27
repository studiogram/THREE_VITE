import { WebGLRenderer } from "three";

export class ThreeRenderer extends WebGLRenderer {
  htmlElement: HTMLCanvasElement;

  constructor(htmlElement: HTMLCanvasElement) {
    super({
      canvas: htmlElement,
      antialias: true,
      alpha: true,
    });
    this.htmlElement = htmlElement;
    this.setPixelRatio(window.devicePixelRatio);
    // // Pour accepter les ombres
    // this.shadowMap.enabled = true;
    // this.shadowMap.type = PCFSoftShadowMap;
    // // 1.0 gère l'alpha :
    // const color = new Color("#ff0048", 1.0);
    // this.setClearColor(color);
    this.setElement();
  }

  setElement() {
    this.setSize(window.innerWidth, window.innerHeight);
  }

  resize() {
    this.setPixelRatio(window.devicePixelRatio);
    this.setElement();
  }
}
