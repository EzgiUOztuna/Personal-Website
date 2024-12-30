import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import "./Projects.css";
import { LanguageContext } from "../contexts/LanguageContext";


export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <>
            <div className={`projects-container ${darkMode ? "dark" : ""}`}>
                <h1>{words.projects}</h1>
                <div className="projects">
                    {words.project.map((item, index) => (
                        <div className={`project-${index + 1}`} key={index}>
                            <h2>{item.title}</h2>
                            <p className={`def-project${index + 1}`}>{item.definition}</p>
                            <div className="programs">
                                <p className="react">react</p>
                                {item.title === "Pizza Project" && <p className="redux">redux</p>}
                                <p className="vercel">vercel</p>
                                <p className="axios">axios</p>
                                <p className="router">router</p>
                            </div>
                            <div className="buttons">
                                <a href={item.githubLink} target="_blank">
                                    <button className="view-git">{words.viewGit}</button></a>

                                <a href={item.appLink} target="_blank">
                                    <button className="go-app">{words.goApp}<span>&#8594;</span></button></a>
                            </div>
                            <img className="images" src={item.imageUrl} />
                        </div>
                    ))}
                </div>
                <div className="footer">
                    <p>{words.footerP}<img className="rectangle-40" src="Rectangle 40.svg" /></p>
                    <ul>
                        <a style={{ color: "#1769FF" }} href={words.githubUrl} target="_blank">Github</a>
                        <a href={words.personalBlogUrl} target="_blank">{words.personalBlogTitle}</a>
                        <a style={{ color: "#0077B5" }} href={words.linkedinUrl} target="_blank">Linkedin</a>
                        <a style={{ color: "#AF0C48" }} href={words.emailUrl} target="_blank">Email</a>
                    </ul>
                </div >
            </div>

        </>
    )
}