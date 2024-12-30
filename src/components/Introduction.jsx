import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import "./Introduction.css";
import { useContext } from "react";
import IntroductionDefinition from "./IntroductionDefinition";
import { englishWords } from "../assets/EnglishData";
import { turkishWords } from "../assets/TurkishData";

export default function Introduction() {
    const { darkMode, handleDarkModeChange } = useContext(DarkModeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const word = language === "en" ? turkishWords : englishWords;

    return (
        <>
            <div className={`w-screen bg-gray-100 transition-all from-neutral-300 relative  ${darkMode ? "dark:bg-slate-800 text-white" : ""}`}>
                <img className="ellipse-10" src="Ellipse 10.svg" />
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
                        <p className="darkModeText">{language === "en" ? englishWords.mode : turkishWords.mode}</p>
                    </div>
                    <div className="divider">|</div>
                    <div className="language">
                        <button onClick={toggleLanguage} dangerouslySetInnerHTML={{ __html: word.translate }}>
                        </button>
                    </div>
                </div>
                <IntroductionDefinition />
            </div>
        </>
    );

}
