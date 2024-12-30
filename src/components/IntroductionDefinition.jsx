import { useContext } from "react";
import "./Introduction.css";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

function IntroductionDefinition() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <div className={`flex justify-center items-start pt-20 gap-12 ${darkMode ? "dark:bg-slate-800 text-white" : ""}`}>
            <div className="paragraph">
                <img className="rectangle-2" src="Rectangle 2.svg" />
                <p>{words.title}</p>
                <p>{words.definition}</p>
                <div className="social">
                    <div className="social-media">
                        {words.socialMedia.map((item, index) => (
                            <a key={index} href={item.url} target="_blank">
                                <i className={item.iconClass}></i>
                            </a>
                        ))}
                    </div>
                    <p className="e-mail" dangerouslySetInnerHTML={{ __html: words.email }} />
                </div>
            </div>
            <div className="photo"><img src="Group 102.svg" />
            </div>
        </div>
    )
}

export default IntroductionDefinition