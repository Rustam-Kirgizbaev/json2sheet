export interface Alignment {
  horizontal?:
    | "left"
    | "center"
    | "right"
    | "fill"
    | "justify"
    | "centerContinuous"
    | "distributed";
  vertical?: "top" | "middle" | "bottom" | "distributed" | "justify";
  wrapText?: boolean;
  shrinkToFit?: boolean;
  indent?: number;
  readingOrder?: "rtl" | "ltr";
  textRotation?: number | "vertical";
}
