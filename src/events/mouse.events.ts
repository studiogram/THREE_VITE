export class MouseEvents {
  static mouseX = 0;
  static mouseY = 0;

  static {
    window.addEventListener("mousemove", (event) => {
      MouseEvents.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      MouseEvents.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  }
}
