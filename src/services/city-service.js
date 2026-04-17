import { database } from "../firebase/firebase";
import { ref, set, get } from "firebase/database";

const defaultChampionship = {
  name: "Sebastian Vettel",
  points: 452,
  debut: 2002,
  team: [],
};

const saveChampionship = async (championshipData) => {
  try {
    const championshipRef = ref(database, "championship");
    await set(championshipRef, championshipData);
    return "championship";
  } catch (error) {
    console.error("Error saving championship data to Database:", error);
    throw error;
  }
};

const loadChampionship = async () => {
  try {
    const championshipRef = ref(database, "championship");
    const snapshot = await get(championshipRef);

    if (snapshot.exists()) {
      return snapshot.val();
    }

    return defaultChampionship;
  } catch (error) {
    console.error("Error loading championship data from database:", error);
    throw error;
  }
};

export default {
  saveChampionship,
  loadChampionship,
};