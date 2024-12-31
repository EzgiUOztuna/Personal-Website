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
                <img className="absolute left-[29.23%]" src="Ellipse 10.svg" />
                <img className="absolute top-[80%] right-0" src="Rectangle 18.svg" />
                <img className="absolute left-[68%] top-[37.5rem] z-[1]" src="Ellipse 11.svg" />
                <div className="flex justify-end h-[1.12rem] gap-8 pt-8 pr-36">
                    <div className="h-[1.63rem] flex gap-2">
                        <input
                            type="checkbox"
                            id="darkmode-toggle"
                            checked={darkMode}
                            onChange={handleDarkModeChange}
                        />
                        <label htmlFor="darkmode-toggle"></label>
                        <p className="h-6 font-inter text-base font-bold text-[#777777]">{language === "en" ? englishWords.mode : turkishWords.mode}</p>
                    </div>
                    <div className="h-6 font-inter text-base font-bold text-[#777777]">|</div>
                    <div className="flex items-end h-[1.5rem] font-inter text-[1rem] font-bold text-[#777777]">
                        <button onClick={toggleLanguage} dangerouslySetInnerHTML={{ __html: word.translate }}>
                        </button>
                    </div>
                </div>
                <IntroductionDefinition />
            </div>
        </>
    );

}
