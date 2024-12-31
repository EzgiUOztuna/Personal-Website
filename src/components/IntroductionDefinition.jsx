import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

function IntroductionDefinition() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <div className={`flex justify-center items-start pt-20 gap-12 ${darkMode ? "dark:bg-slate-800 text-white" : ""}`}>
            <div className="relative w-[40rem] font-inter text-[2.62rem] font-medium z-10">
                <img className="absolute left-[-1.5rem] top-[6.2rem] z-[-1]" src="Rectangle 2.svg" />
                <p>{words.title}</p>
                <p>{words.definition}</p>
                <div>
                    <div className="flex gap-4 h-[35px] items-center pt-20 pb-8">
                        {words.socialMedia.map((item, index) => (
                            <a key={index} href={item.url} target="_blank">
                                <i className={item.iconClass}></i>
                            </a>
                        ))}
                    </div>
                    <p className="pt-2 pb-16 w-[28.5rem] font-inter text-base font-normal" dangerouslySetInnerHTML={{ __html: words.email }} />
                </div>
            </div>
            <img src="Group 102.svg" />
        </div>
    )
}

export default IntroductionDefinition