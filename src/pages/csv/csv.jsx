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
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleFile = async (e) => {
        try {
            setError("");
            setUploadSuccess(false);
            const file = e.target.files[0];
            if (!file) return;
            const result = await importFileToInternalJson(file);
            setFileData(result);
        } catch (err) {
            setError(err.message || "File import failed");
        }
    };

    const uploadToFirebase = async () => {
        if (!fileData?.data) {
            setError("Primero sube un archivo.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            setUploadSuccess(false);

            const dbRef = ref(database, "DataBase-WebPage");
            const dataToUpload = Array.isArray(fileData.data)
                ? fileData.data
                : [fileData.data];

            for (const record of dataToUpload) {
                await push(dbRef, record);
            }

            setUploadSuccess(true);
        } catch (err) {
            setError(err.message || "Error al subir a Firebase");
        } finally {
            setLoading(false);
        }
    };


    const loadFromFirebase = async () => {
        const snapshot = await get(ref(database, "DataBase-WebPage"));
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


                        <button onClick={uploadToFirebase} disabled={loading}>
                            {loading ? "Subiendo..." : "⬆ Añadir a Firebase"}
                        </button>

                        {uploadSuccess && (
                            <p className="success">¡Datos añadidos a Firebase correctamente!</p>
                        )}
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