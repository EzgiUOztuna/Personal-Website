import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import "./Profile.css";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Profile() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <>
            <div className={`profile-container ${darkMode ? "dark" : ""}`}>
                <img className="ellipse-12" src="Ellipse 12.svg" />
                <h3 className="header-3">{words.profile}</h3>
                <div className="info-cards">
                    <div className="basic-info-card">
                        <h4>{words.basicInformation}</h4>
                        <p><span className="label">{words.birthDate.label}</span>{words.birthDate.value}</p>
                        <p><span className="label">{words.city.label}</span>{words.city.value}</p>
                        <p><span className="label">{words.education.label}</span>{words.education.value}</p>
                        <p><span className="label">{words.role.label}</span>{words.role.value}</p>
                    </div>

                    <div className="about-me">
                        <h4>{words.aboutMe} <img className="rectangle-39" src="Rectangle 39.svg" /></h4>
                        <p>{words.aboutMeParagraph}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
