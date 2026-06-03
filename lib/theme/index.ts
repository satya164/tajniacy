import { ColorPalette } from "./palette";

export type ThemeKind = 'light' | 'dark';

export interface Theme {
  kind: ThemeKind;
  colors: ColorPalette;
}
