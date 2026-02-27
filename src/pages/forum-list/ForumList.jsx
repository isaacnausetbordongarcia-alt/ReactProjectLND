import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
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
            message: data.message
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

  const addMessage = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const message = e.target.message.value;
    ForumService.addMessage(user, message).then((res) => {
      refForm.current.reset();
      setMessages(oldValues => [...oldValues, { key: res.key, user, message }])
    })
  }

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <>
    <Header />
      <div className="bicycle-list-main-container">
        <div className="bicycle-form-container">
          <form id="bicycle-form" onSubmit={addMessage} ref={refForm}>
            <input className="rounded-input" type="text" name="user" placeholder="Escibe tu Usuario aquí..."/>
            <input className="rounded-input" type="text" name="message" placeholder="Escribe tu mensaje aquí..."/>
            <input className="rounded-input" type="submit" value="Añadir Mensaje"/>
          </form>
        </div>

        <div className="bicycle-list">
          {messages.map(b =>
            <div className="bike-item" key={b.key}>
              <p className="data-container">Usuario: {b.user} Mensaje/Comentario: {b.message}</p>
              <FaRegTrashAlt className="delete-bike" onClick={() => removeMessage(b.key)}/>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForumList;