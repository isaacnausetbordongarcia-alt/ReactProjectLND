import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuVisible(prev => !prev);
  };

  return (
    <>
      <div className="header-container-holder">

        <div className={`hamburger ${isSideMenuVisible ? "active" : ""}`} onClick={toggleSideMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="header-center">
          <img className="header-logo" src="f1-logo.png" alt="F1 Logo" />
          <h1 className="header-title">FORMULA 1</h1>
        </div>
        <div className="rss-icon-container">
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="rss-link">
            <img src="/rss.png" alt="RSS Feed" className="rss-icon" />
          </a>
        </div>
      </div>

      <div className={`header-side-menu ${isSideMenuVisible ? "open" : ""}`}>
        <ul>
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/schedule">Circuitos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/forum-list">Foro</Link></li>
          <li><Link to="/news">Noticias</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header