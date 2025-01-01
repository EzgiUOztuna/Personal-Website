import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";
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
            <div className={`w-screen bg-gray-100 transition-all from-neutral-300 relative ${darkMode ? "dark:bg-slate-800 text-white" : ""}`}>
                <img className="absolute left-[4%] w-20
                                lg:left-[29.23%] lg:w-[6.93rem]
                                xl:left-[29.23%] xl:w-[6.93rem]" src="Ellipse 10.svg" />
                <img className="absolute top-[70%] right-0 w-[62px]
                                lg:top-[80%] lg:w-[124px]
                                xl:top-[80%] xl:w-[124px]" src="Rectangle 18.svg" />
                <img className="absolute left-[68%] top-[37.5rem] z-[1]" src="Ellipse 11.svg" />
                <div className="relative flex justify-end h-[1.12rem] gap-2 pt-8 pr-4 items-center 
                                lg:gap-8 lg:pr-36
                                xl:gap-8 xl:pr-36">
                    <div className="h-[1.63rem] flex items-center ">
                        <input
                            type="checkbox"
                            id="darkmode-toggle"
                            checked={darkMode}
                            onChange={handleDarkModeChange}
                            className="peer hidden"
                        />
                        <label htmlFor="darkmode-toggle" className="w-[2rem] h-5 relative flex bg-[#e92577] opacity-75 rounded-[12.5rem] cursor-pointer transition-duration: 300ms;  after:content-[''] after:w-[0.8rem] after:h-[0.8rem] after:absolute after:top-[0.24rem] after:left-1 after:bg-[#ffe86e] after:rounded-[11.25rem] after:transition-duration: 300ms; peer-checked:after:left-[1.8rem] peer-checked:after:-translate-x-full peer-checked:after:bg-[#3a3a3a] active:after:w-[2rem]
                        lg:w-[3.44rem] lg:h-6 lg:after:w-4 lg:after:h-4 lg:after:top-1 lg:peer-checked:after:left-[3.18rem] lg:active:after:w-[1.62rem] 
                        xl:w-[3.44rem] xl:h-6 xl:after:w-4 xl:after:h-4 xl:after:top-1 xl:peer-checked:after:left-[3.18rem] xl:active:after:w-[1.62rem]"></label>
                        <p className="h-6 font-inter text-[0.9rem] font-bold text-[#777777] pl-2
                                      lg:text-base
                                      xl:text-base">{language === "en" ? englishWords.mode : turkishWords.mode}</p>
                    </div>
                    <div className="h-6 font-inter text-[0.9rem] font-bold text-[#777777]
                                    lg:text-base
                                    xl:text-base">|</div>
                    <div className="flex items-end  font-inter text-[0.9rem] font-bold text-[#777777]
                                    lg:h-[1.5rem] lg:text-[1rem]
                                    xl:h-[1.5rem] xl:text-[1rem]">
                        <button onClick={toggleLanguage} dangerouslySetInnerHTML={{ __html: word.translate }}>
                        </button>
                    </div>
                </div>
                <IntroductionDefinition />
            </div >
        </>
    );

}
