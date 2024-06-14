import { Alignment } from "./alignment";
import { Font } from "./font";

export interface Column {
  label: string;
  value: string;
  style?: ColumnStyle;
  width?: number;
}

export interface ColumnStyle {
  font?: Font;
  alignment?: Alignment;
}
