import { Workbook, Style } from "exceljs";
import { Column, Value } from "../interfaces/column";

function getValue(obj: any, value: Value): any {
  if (typeof value === "string") {
    return value.split(".").reduce((acc, part) => acc && acc[part], obj);
  }

  if (typeof value === "function") {
    return value(obj);
  }
}

export function jsonToExcelWorkbook(
  title: string,
  columns: Column[],
  data: any[]
) {
  const workbook = new Workbook();
  const sheet = workbook.addWorksheet(title);

  const values = columns.map((column: Column, index: number) => {
    const cell = sheet.getCell(1, index + 1);

    cell.value = column.label;
    if (column.style) {
      cell.style = column.style as Partial<Style>;
    }

    if (column.width) {
      sheet.getColumn(index + 1).width = column.width;
    }

    return column.value;
  });

  data.forEach((row, rIndex) => {
    values.forEach((value: Value, cIndex: number) => {
      const cell = sheet.getCell(rIndex + 2, cIndex + 1);

      cell.value = getValue(row, value);
      if (columns[cIndex].style) {
        cell.style = columns[cIndex].style as Partial<Style>;
      }
    });
  });

  return workbook;
}
