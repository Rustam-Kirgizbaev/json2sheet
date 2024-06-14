import { Color } from "./color";

export interface Font {
  name?: string;
  size?: number;
  family?: number;
  scheme?: "minor" | "major" | "none";
  charset?: number;
  color?: Color;
  bold?: boolean;
  italic?: boolean;
  underline?:
    | boolean
    | "none"
    | "single"
    | "double"
    | "singleAccounting"
    | "doubleAccounting";
  vertAlign?: "superscript" | "subscript";
  strike?: boolean;
  outline?: boolean;
}
