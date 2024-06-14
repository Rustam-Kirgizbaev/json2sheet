import { Column } from "../interfaces/column";
import { jsonToExcelWorkbook } from "./json-to-workbook";

export async function jsonToBuffer(
  title: string,
  columns: Column[],
  data: any[]
) {
  const workbook = jsonToExcelWorkbook(title, columns, data);

  return await workbook.xlsx.writeBuffer();
}
