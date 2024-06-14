import { Column } from "../interfaces/column";
import { jsonToExcelWorkbook } from "./json-to-workbook";

export async function jsonToFile(
  filename: string,
  sheetTitle: string,
  columns: Column[],
  data: any[]
) {
  const workbook = jsonToExcelWorkbook(sheetTitle, columns, data);

  await workbook.xlsx.writeFile(filename);
}
