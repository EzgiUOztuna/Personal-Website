import "./Introduction.css";
import { useState } from "react";

export default function Introduction() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    const handleDarkModeChange = () => setDarkMode(!darkMode);
    const toggleLanguage = () => {
        setLanguage(language === "en" ? "tr" : "en")
    };

    return (
        <div className={`app-container ${darkMode ? "dark" : ""}`}>
            <div className="header">
                <div className="darkMode">
                    <input
                        type="checkbox"
                        id="darkmode-toggle"
                        checked={darkMode}
                        onChange={handleDarkModeChange}
                    />
                    <label htmlFor="darkmode-toggle"></label>
                    <p className="darkModeText">{language === "en" ? "DARK MODE" : "KARANLIK MOD"}</p>
                </div>
                <div className="divider">|</div>
                <div className="language">
                    <button onClick={toggleLanguage}>{language === "en" ? (
                        <>
                            <span style={{ color: "#e92577" }}>TÜRKÇE</span>'YE ÇEVİR
                        </>
                    ) : (
                        <>
                            TRANSLATE TO <span style={{ color: "#e92577" }}>ENGLISH</span>
                        </>)}
                    </button>
                </div>
            </div>
            <div className="def-container">
                <div className="paragraph">
                    <p style={{ fontFamily: "inter", fontWeight: 400, fontSize: "1.87rem" }}>Hi! 👋</p>
                    <p>I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!
                    </p>
                </div>
                <div className="photo">
                    <img src="Group 102.svg" />
                </div>
            </div>
        </div>
    );

}
