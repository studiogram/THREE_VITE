import { BoxGeometry, Mesh, MeshNormalMaterial } from "three";
import { Pane } from "tweakpane";
// import { Pane } from "tweakpane";

export class Cube {
  mesh: Mesh;
  rotation = 0.01;
  pane: Pane;
  params = { rotation: 0 };

  constructor(pane: Pane) {
    this.pane = pane;
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshNormalMaterial();
    this.mesh = new Mesh(geometry, material);
    this.addPane();
  }

  addPane() {
    const folder = this.pane.addFolder({ title: "Cube" });
    folder.addBinding(this.params, "rotation", {
      min: 0,
      max: Math.PI * 2,
    });
  }

  animate() {
    // this.mesh.rotation.x += this.rotation;
    // this.mesh.rotation.y += this.rotation;
    this.mesh.rotation.x = this.params.rotation;
    this.mesh.rotation.y = this.params.rotation;
  }
}
