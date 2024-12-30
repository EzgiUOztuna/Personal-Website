import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import "./Skills.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { englishWords } from "../assets/EnglishData";
import { turkishWords } from "../assets/TurkishData";
export default function Skills() {

    const { darkMode } = useContext(DarkModeContext);
    const { language } = useContext(LanguageContext)
    const words = language === "en" ? englishWords : turkishWords;

    return (
        <div className={`skills-container ${darkMode ? "dark" : ""}`}>
            <img className="rectangle-22" src="Rectangle 22.svg" />
            <h2 className="skills-header">{words.skills}</h2>
            <img className="skills" src="skillBoxes.svg" />
        </div>
    )
}