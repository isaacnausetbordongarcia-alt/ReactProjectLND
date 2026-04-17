import React, { useState } from "react";
import { importFileToInternalJson } from "../../utils/file-import";
import "./Csv.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Csv() {
    const [fileData, setFileData] = useState(null);
    const [error, setError] = useState("");

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

    return (
        <>
        <Header />
        <div className="csv-page">
            <h1>CSV</h1>
            <input
                type="file"
                accept=".json,.xml,.csv"
                onChange={handleFile}
            />

            {error && <p className="error">{error}</p>}

            {!error && !fileData && <p>No imported file yet</p>}

            {fileData && (
                <div className="csv-preview">
                    <p><strong>File:</strong> {fileData.fileName}</p>
                    <p><strong>Format:</strong> {fileData.format}</p>
                    <pre>{JSON.stringify(fileData.data, null, 2)}</pre>
                </div>
            )}
        </div>
        <Footer />
        </>
    );
}