import { useState } from "react";
import "./Header.css";

function Header() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuVisible(prev => !prev);
    };

    return (
        <>
            <div className="header-container-holder">
                <img
                    className="header-logo"
                    onClick={toggleSideMenu}
                    src="f1-logo.png"
                    alt="F1 Logo"
                />
                <h1 className="header-title">FORMULA 1</h1>
            </div>

            <div className={`header-side-menu ${isSideMenuVisible ? "open" : ""}`}>
                <ul>
                    <li>Inicio</li>
                    <li>Circuitos</li>
                </ul>
            </div>
        </>
    );
}

export default Header