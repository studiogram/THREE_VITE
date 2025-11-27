import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

export class CylindreMesh extends Mesh {
  constructor(x: number, y: number, z: number) {
    const size = 1;
    super(
      new BoxGeometry(size, size, size),
      new MeshBasicMaterial({ color: 0x00ff00 })
    );
    this.position.set(x || 0, y || 0, z || 0);
  }

  animate() {
    // this.rotation.x += 0.02;
    // this.rotation.y += 0.03;
  }
}
