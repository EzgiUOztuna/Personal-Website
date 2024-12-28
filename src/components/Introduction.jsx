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
            <div className={`app-container ${darkMode ? "dark" : ""}`}>
                <img className="ellipse-10" src="Ellipse 10.svg" />
                <img className="rectangle-2" src="Rectangle 2.svg" />
                <img className="rectangle-18" src="Rectangle 18.svg" />
                <img className="ellipse-11" src="Ellipse 11.svg" />
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
                        <p style={{ fontFamily: "inter", fontWeight: 400, fontSize: "1.87rem", paddingBottom: "1rem" }}>Hi! 👋</p>
                        <p>I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!
                        </p>
                    </div>
                    <div className="photo">
                        <img src="Group 102.svg" />
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/ezgiuygun/" target="_blank">
                        <i className="fa-brands fa-linkedin-in fa-2xl"></i>
                    </a>
                    <a href="https://github.com/EzgiUOztuna" target="_blank">
                        <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                </div>
                <p className="e-mail">
                    Currently <span style={{ color: "#AF0C48" }}>Freelancing</span> for <span style={{ color: "#AF0C48" }}>UX, UI, & Web Design</span> Projects. Invite me to join your team ->
                    <a style={{ color: "#AF0C48", textDecoration: "underline" }} href="mailto:ezgiuygn@gmail.com" target="_blank"> ezgiuygn@gmail.com</a>
                </p>


            </div>
        </>
    );

}
