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
        <>
            <div className={`background ${darkMode ? "dark" : ""}`}>
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


        </>

    );
}
