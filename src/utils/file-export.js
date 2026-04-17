import Papa from "papaparse";

export const saveFileInFormat = async (format, data, fileName = "data.json") => {
  let description = "";
  let acceptedType = {};
  let content = "";

  switch (format) {
    case "json":
      description = "JSON";
      acceptedType = { "application/json": [".json"] };
      content = JSON.stringify(data, null, 2);
      break;

    case "xml":
      description = "XML";
      acceptedType = {
        "application/xml": [".xml"],
        "text/xml": [".xml"],
      };
      content = typeof data === "string" ? data : String(data);
      break;

    case "csv":
      description = "CSV";
      acceptedType = { "text/csv": [".csv"] };
      content = typeof data === "string" ? data : Papa.unparse(data);
      break;

    default:
      throw new Error(`Unsupported format: ${format}`);
  }

  const handle = await window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
      {
        description,
        accept: acceptedType,
      },
    ],
  });

  const writable = await handle.createWritable();
  await writable.write(content);
  await writable.close();
};