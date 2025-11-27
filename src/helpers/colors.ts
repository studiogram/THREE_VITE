import { Color } from "three";

export const getColor = (r: number, g: number, b: number) => {
  return new Color(r / 255, g / 255, b / 255);
};
