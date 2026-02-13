import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>F1 SCHEDULE</h3>
          <ul>
            <li><Link to="/home">Inicio</Link></li>
            <li><Link to="/schedule">Circuitos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTÁCTANOS</h3>
          <ul>
            <li>F1FanMade@gmail.com</li>
            <li>+34 123 456 789</li>
            <li>Las Palmas de Gran Canaria, España</li>
          </ul>
        </div>

        {/* Sección 3: Redes sociales */}
        <div className="footer-section">
          <h3>SÍGUENOS</h3>
          <div className="social-links">
            <a href="https://github.com/isaacnausetbordongarcia-alt" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/isaac-nauset" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/isaacnauset" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Línea legal */}
      <div className="footer-bottom">
        <p>
          © 2026 F1 Schedule. Todos los derechos reservados. | 
          <Link to="/privacidad"> Política de Privacidad</Link> | 
          <Link to="/cookies"> Política de Cookies</Link> | 
          <Link to="/terminos"> Términos de Uso</Link>
        </p>
        <p className="footer-credit">
          Desarrollado por <a href="https://github.com/isaacnausetbordongarcia-alt" target="_blank">Isaac Nauset</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
