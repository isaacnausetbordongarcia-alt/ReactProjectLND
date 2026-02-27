import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/DataBase-WebPage");

const getAllMessages = () => {
  return get(dbRef);
};

const addMessage = (user, message, date) => {
  return push(dbRef, {
    user: user,
    message: message,
    date: date
  });
};

const removeMessage = (key) => {
  const dbRefMessage = ref(db, `/DataBase-WebPage/${key}`);
  return remove(dbRefMessage);
};

export default {
  getAllMessages,
  addMessage,
  removeMessage,
};