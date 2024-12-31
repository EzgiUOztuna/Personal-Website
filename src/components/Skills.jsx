import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Skills() {

    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <div className={`w-screen h-112 relative transition-all block ${darkMode ? "dark:bg-slate-800 text-white" : ""}`}>
            <img className="absolute top-[20.5rem]" src="Rectangle 22.svg" />
            <h2 className="text-center font-inter text-[2.7rem] font-medium py-12">{words.skills}</h2>
            <img className="relative mx-auto pb-28 w-[50rem]" src="skillBoxes.svg" />
        </div>
    )
}