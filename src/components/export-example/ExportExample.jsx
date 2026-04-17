function ExportExamples(props) {
  const data = props.defaultChampionship;

  return (
    <>
      <h1>Export Examples</h1>
      <div className="export-buttons">
        <button onClick={() => saveFileInFormat("json", data, "result-file.json")}>
          Export to JSON
        </button>

        <button onClick={() => saveFileInFormat("xml", data, "result-file.xml")}>
          Export to XML
        </button>

        <button onClick={() => saveFileInFormat("csv", data, "result-file.csv")}>
          Export to CSV
        </button>
      </div>
    </>
  );
}
