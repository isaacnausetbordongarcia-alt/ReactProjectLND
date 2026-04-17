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
    const championshipRef = ref(database, "DataBase-WebPage");
    await set(championshipRef, championshipData);
    return "championship";
  } catch (error) {
    console.error("Error saving championship data to Database:", error);
    throw error;
  }
};

const loadChampionship = async () => {
  try {
    const snapshot = await get(ref(database, "DataBase-WebPage"));

    if (snapshot.exists()) {
      const data = snapshot.val();

      console.log("Firebase RAW:", data);

      return Object.values(data);
    }

    return [];
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};


export default {
  saveChampionship,
  loadChampionship,
};