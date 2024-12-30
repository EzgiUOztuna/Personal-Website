import { useContext } from "react";
import "./Introduction.css";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { englishWords } from "../assets/EnglishData";
import { turkishWords } from "../assets/TurkishData";

function IntroductionDefinition() {
    const { darkMode } = useContext(DarkModeContext);
    const { language } = useContext(LanguageContext)

    const words = language === "en" ? englishWords : turkishWords;

    return (
        <div className={`def-container ${darkMode ? "dark" : ""}`}>
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