import { useState } from 'react';
import './ContactForm.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarías con EmailJS, Formspree o backend
    console.log('Datos enviados:', formData);
    alert('¡Mensaje enviado! (Demo)');
  };

  return (
    
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">CONTÁCTANOS</h2>
        <p className="contact-subtitle">Déjanos tu mensaje sobre F1</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required className="form-input" />
          </div>

          <div className="form-group">
            <input type="email" name="email" placeholder="tu@email.com" value={formData.email} onChange={handleChange} required className="form-input"/>
          </div>

          <div className="form-group">
            <input type="text" name="subject" placeholder="Asunto" value={formData.subject} onChange={handleChange} className="form-input"/>
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="Tu mensaje..." rows="5" value={formData.message} onChange={handleChange} required className="form-textarea"/>
          </div>

          <button type="submit" className="submit-btn">ENVIAR MENSAJE</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
