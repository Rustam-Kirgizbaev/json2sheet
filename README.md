# json2sheet

json2sheet is a utility package to convert json objects to simple excel sheets in an easier and faster way. And, it is built on top of [exceljs](https://www.npmjs.com/package/exceljs) and you can check it if you want to create more complex excel sheets.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

You can install the package via npm or yarn.

```bash
npm install json2sheet
```

or

```bash
yarn add json2sheet
```

## Usage

There are two main functions you can use:

1. Create Excel `file buffer` from json object:

```javascript
import { jsonToBuffer } from "json2sheet";

async function createExcelBuffer() {
  const columns: Column[] = [
    {
      label: "User's name", // column name
      value: "name", // property name
      width: 40, // column width
      style: {
        // column style
        font: {
          italic: true,
        },
        alignment: {
          vertical: "middle",
          horizontal: "center",
        },
      },
    },
    {
      label: "User's age",
      value: "age",
      width: 10,
    },
    {
      label: "Username",
      value: "user.name", // supports inner objects
      width: 20,
    },
  ];

  const data: any[] = [
    {
      name: "John Doe",
      age: 24,
      user: {
        name: "johndoe",
      },
    },
    {
      name: "Doe John",
      age: 42,
      user: {
        name: "doejohn",
      },
    },
  ];

  // jsonToBuffer is an async function and returns Promise<Buffer>
  return await jsonToBuffer("sheetname", columns, data);
}
```

`jsonToBuffer` is useful when you need to send Excel file to the user via API endpoint in Express or NestJS.
You can do so like this:

```javascript
const buffer = await createExcelBuffer();
const filename = "cool-file";

res.set({
  "Content-Type":
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "Content-Disposition": `attachment; filename=${filename}.xlsx`,
});

res.send(buffer);
```

2. Create `Excel file` itself:

```javascript
import { jsonToFile } from "json2sheet";

async function createExcelBuffer() {
  const columns: Column[] = [
    {
      label: "User's name", // column name
      value: "name", // property name
      width: 40, // column width
      style: {
        // creates italic text
        font: {
          italic: true,
        },
        // positions text in the middle of the cell
        alignment: {
          vertical: "middle",
          horizontal: "center",
        },
      },
    },
    {
      label: "User's age",
      value: "age",
      width: 10,
    },
    {
      label: "Username",
      value: "user.name", // supports inner objects
      width: 20,
    },
  ];

  const data: any[] = [
    {
      name: "John Doe",
      age: 24,
      user: {
        name: "johndoe",
      },
    },
    {
      name: "Doe John",
      age: 42,
      user: {
        name: "doejohn",
      },
    },
  ];

  // jsonToFile is an async void function and it creates xlsx file.
  return await jsonToFile("filename.xlsx", "sheetname", columns, data);
}
```

`jsonToFile` is useful when you want to create Excel files in your local disk or on your your server.

If you want to give more style to your columns [check these files](https://github.com/Rustam-Kirgizbaev/json2sheet/tree/main/src/interfaces)!
Currently package only supports `font` and `alignment` in column style!

## Contributing

Contributions are welcome! Please create your PRs and send them for review!
