import Papa from "papaparse";

export const saveFileInFormat = async (format, data, fileName = "data.json") => {
  let content = "";
  let mimeType = "";

  switch (format) {
    case "json":
      content = JSON.stringify(data, null, 2);
      mimeType = "application/json";
      break;
    case "xml":
      content = typeof data === "string" ? data : String(data);
      mimeType = "application/xml";
      break;
    case "csv":
      content = typeof data === "string" ? data : Papa.unparse(data);
      mimeType = "text/csv";
      break;
    default:
      throw new Error(`Unsupported format: ${format}`);
  }

  //Esto se lo tuve que pedir a la IA porque no me funcionaba en mozilla, que es el navegador que uso en el pc de casa
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};