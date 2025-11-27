import { App } from "./App";
import "./styles.css";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas") as HTMLCanvasElement;
  const app = new App(canvas);
  app.animate();
});
