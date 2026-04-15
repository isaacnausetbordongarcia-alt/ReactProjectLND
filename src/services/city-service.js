import { database } from '../firebase/firebase';
import { ref, set, get } from 'firebase/database';

const championship = {
    name: "Sebastian Vettel",
    points: 452,
    debut: 2002,
    team: []
};

const savechampionship = async (championshipData) => {
    try {
        // Save as a singleton at a fixed path so there's only one championship entry
        const championshipRef = ref(database, 'championship'); // overwrite existing data

        await set(championshipRef, championshipData);
        console.log("championship data saved successfully (singleton) to Database at path 'championship'.");
        return 'championship';
    } catch (error) {
        console.error("Error saving championship data to Database:", error);
        throw error;
    }
};

const loadchampionship = async () => {
    try {
        const championshipRef = ref(database, 'championship');
        const snapshot = await get(championshipRef);

        if (snapshot.exists()) {
            const championship = snapshot.val();
            console.log("championship data loaded successfully.");
            return championship;
        } else {
            console.log("No championship entry found in database; keeping local default.");
            return championship; 
        }
    } catch (error) {
        console.error("Error loading championship data from database:", error);
        throw error;
    }
};

export default {
    savechampionship,
    loadchampionship    
}