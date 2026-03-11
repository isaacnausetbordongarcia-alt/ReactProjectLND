import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import ForumService from "../../services/forum.service";
import "./ForumList.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


function ForumList() {
  const [messages, setMessages] = useState([]);
  const refForm = useRef();

  const getAllMessages = () => {
    ForumService.getAllMessages()
      .then((items) => {
        let allMessages = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allMessages.push({
            key: key,
            user: data.user,
            message: data.message,
            date: data.date
          });
        });
        setMessages([...allMessages]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeMessage = (key) => {
    ForumService.removeMessage(key).then((res) => {
      getAllMessages();
    });
  }

  const [editingKey, setEditingKey] = useState(null);
  const [editValues, setEditValues] = useState({ user: "", message: "" });

  const editMessage = (key) => {
    const messageToEdit = messages.find(m => m.key === key);
    setEditingKey(key);
    setEditValues({ user: messageToEdit.user, message: messageToEdit.message });
  };

  const saveMessage = (key) => {
    ForumService.updateMessage(key, editValues.user, editValues.message)
      .then(() => {
        setMessages(messages.map(m =>
          m.key === key ? { ...m, user: editValues.user, message: editValues.message } : m
        ));
        setEditingKey(null);
      })
      .catch(err => console.error(err));
  };

  const cancelEdit = () => {
    setEditingKey(null);
  };

  const addMessage = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const message = e.target.message.value;
    const date = e.target.date.value;
    ForumService.addMessage(user, message, date).then((res) => {
      refForm.current.reset();
      setMessages(oldValues => [...oldValues, { key: res.key, user, message, date }])
    })
  }

  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  const dateFormatted = `${day}/${month + 1}/${year}`;

  //const dateArray = [day,month +1,year];

  /*const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];*/

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <>
      <Header />
      <div className="message-list-main-container">
        <div className="message-form-container">
          <div className="forum-title">FORO</div>
          <form id="message-form" onSubmit={addMessage} ref={refForm}>
            <input className="rounded-input" type="text" name="user" placeholder="Escibe tu Usuario aquí..." />
            <input className="rounded-input" type="text" name="message" placeholder="Escribe tu mensaje aquí..." />
            <input className="rounded-input date-time-block" type="text" name="date" defaultValue={dateFormatted} disabled />
            <input className="rounded-input" type="submit" value="Añadir Mensaje" />
          </form>
        </div>

        <div className="message-list">
          <div className="container-info">
            <div className="col-message">Mensaje</div>
            <div className="col-user">Comenzado Por</div>
            <div className="col-last">Último Mensaje</div>
            <div className="col-delete"></div>
          </div>

          {messages.map(b =>
            <div className="bike-item" key={b.key}>
              <div className="col-message">
                {editingKey === b.key
                  ? <input value={editValues.message} onChange={(e) =>
                    setEditValues({ ...editValues, message: e.target.value })} />
                  : <span className="bike-message">{b.message}</span>
                }
              </div>
              <div className="col-user">
                {editingKey === b.key
                  ? <input value={editValues.user} onChange={(e) =>
                    setEditValues({ ...editValues, user: e.target.value })} />
                  : <span className="bike-user">{b.user}</span>
                }
              </div>
              <div className="col-last">
                <span className="bike-date">{b.date}</span>
              </div>
              <div className="col-delete">
                {editingKey === b.key ? (
                  <>
                    <button onClick={() => saveMessage(b.key)}>✅</button>
                    <button onClick={cancelEdit}>❌</button>
                  </>
                ) : (
                  <>
                    <FaEdit className="edit-bike" onClick={() => editMessage(b.key)} />
                    <FaRegTrashAlt className="delete-bike" onClick={() => removeMessage(b.key)} />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForumList;