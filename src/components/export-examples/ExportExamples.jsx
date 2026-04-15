import "./ExportExamples.css";
import { saveFileInFormat } from "../../utils/file-export";

function ExportExamples(props) {

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
              <pilots>
                <name>Sebastian Vettel</name>
                <debut>2002</debut>
                <point>452</points>
                <teams>
                  <team>
                    <name>Red bull</name>
                    <years>10.5</years>
                  </team>
                  <team>
                    <name>Ferrari</name>
                    <years>5.6</years>
                  </team>
                </teams>
              </pilots>`;

  const csv = `name,year,population
Telde,2020,102647
San Bartolomé de Tirajana,2020,52025
Santa Lucía de Tirajana,2020,70235`;

  return (
    <>
      <h1>Export Examples</h1>
      <div className="export-buttons">
        <button onClick={() => saveFileInFormat("json", props.city, "result-file.json")}>Export to JSON</button>
        <button onClick={() => saveFileInFormat("xml", xml, "result-file.xml")}>Export to XML</button>
        <button onClick={() => saveFileInFormat("csv", csv, "result-file.csv")}>Export to CSV</button>
      </div>

    </>
  )
}

export default ExportExamples