import { Alignment } from "./alignment";
import { Font } from "./font";

export type Value = string | Function;

export interface Column {
  label: string;
  value: Value;
  style?: ColumnStyle;
  width?: number;
}

export interface ColumnStyle {
  font?: Font;
  alignment?: Alignment;
}
