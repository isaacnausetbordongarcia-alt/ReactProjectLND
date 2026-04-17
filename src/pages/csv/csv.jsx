import React, { useState } from "react";
import { importFileToInternalJson } from "../../utils/file-import";
import { saveFileInFormat } from "../../utils/file-export";
import database from "../../firebase";
import { ref, get, push } from "firebase/database";
import "./Csv.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Csv() {
    const [fileData, setFileData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFile = async (e) => {
        try {
            setError("");
            const file = e.target.files[0];
            if (!file) return;
            const result = await importFileToInternalJson(file);
            setFileData(result);
        } catch (err) {
            setError(err.message || "File import failed");
        }
    };

    const loadFromFirebase = async () => {
        const snapshot = await push(ref(database, "DataBase-WebPage"));
        if (!snapshot.exists()) throw new Error("No hay datos en Firebase");
        return Object.values(snapshot.val());
    };

    const handleFirebaseExport = async (format) => {
        try {
            setLoading(true);
            setError("");
            const data = await loadFromFirebase();
            saveFileInFormat(format, data, `firebase-export.${format}`);
        } catch (err) {
            setError(err.message || "Error exportando desde Firebase");
        } finally {
            setLoading(false);
        }
    };

    const handleFileExport = (format) => {
        if (!fileData?.data) {
            setError("Primero sube un archivo.");
            return;
        }
        saveFileInFormat(format, fileData.data, `export.${format}`);
    };

    return (
        <>
            <Header />
            <div className="csv-page">
                <h1>CSV</h1>

                <label className="file-upload">
                    Subir archivo (CSV, JSON, XML)
                    <input type="file" accept=".json,.xml,.csv" onChange={handleFile} hidden />
                </label>

                {error && <p className="error">{error}</p>}
                {!error && !fileData && <p>No imported file yet</p>}

                {fileData && (
                    <div className="csv-preview">
                        <p><strong>File:</strong> {fileData.fileName}</p>
                        <p><strong>Format:</strong> {fileData.format}</p>
                        <pre>{JSON.stringify(fileData.data, null, 2)}</pre>
                    </div>
                )}

                <h3>Exportar desde Firebase</h3>
                <div className="export-buttons">
                    <button onClick={() => handleFirebaseExport("json")} disabled={loading}>
                        {loading ? "Cargando..." : "JSON"}
                    </button>
                    <button onClick={() => handleFirebaseExport("xml")} disabled={loading}>
                        {loading ? "Cargando..." : "XML"}
                    </button>
                    <button onClick={() => handleFirebaseExport("csv")} disabled={loading}>
                        {loading ? "Cargando..." : "CSV"}
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}