import { useEffect, useState } from "react";
import ExportExamples from "../../components/export-examples/ExportExamples";
import FormExample from "../../components/form-example/FormExample";
import ImportExamples from "../../components/import-examples/ImportExamples";
import Modal from "../../components/modal/Modal";
import "./Csv.css";
import CityService from "../../services/city-service";

function csv() {

  const [currentChampionship, setcurrentChampionship] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    CityService.loadCity().then((loadedCity) => {
      setcurrentChampionship(loadedCity || {});
    }).catch((error) => {
      console.error("Error loading city:", error);
    });
  }, [])

  const addLocation = (e) => {
    e.preventDefault()

    setcurrentChampionship((prev) => {
      return {
        ...prev,
        locations: [...prev.locations, {
          name: e.target["location-name"].value,
          surface: Number(e.target["location-surface"].value)
        }]
      }
    })

  }

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await CityService.saveCity(currentChampionship);
      setModalTitle("Success");
      setModalMessage(`Championship saved successfully to database`);
      setModalOpen(true);
    } catch (error) {
      setModalTitle("Error");
      setModalMessage("Error saving Championship.");
      setModalOpen(true);
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <>
      <div className="home-save-container">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="home-save-button"
        >
          {isSaving ? "Saving..." : "Save Championship Data"}
        </button>
      </div>

      <div className="home-export-examples">
        <ExportExamples city={currentChampionship} />
      </div>
      <div className="home-import-examples">
        <ImportExamples />
      </div>
      <div className="home-form-example">
        <FormExample addLocation={addLocation} />
      </div>
      <Modal open={modalOpen} title={modalTitle} message={modalMessage} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default csv