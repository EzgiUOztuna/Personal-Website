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
                                <a href="project.githubLink" target="_blank">
                                    <button className="view-git">View on Github</button></a>
                                {item.appLink && (
                                    <a href="project.appLink" target="_blank">
                                        <button className="go-app">Go to app  <span>&#8594;</span></button></a>)}
                            </div>
                            <img className="images" src={item.imageUrl} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">

                <p>Let's work together on your next product.<img className="rectangle-40" src="Rectangle 40.svg" /></p>
                <ul>
                    <a style={{ color: "#1769FF" }} href="https://github.com/EzgiUOztuna" target="_blank">Github</a>
                    <a>Personal Blog</a>
                    <a style={{ color: "#0077B5" }} href="https://www.linkedin.com/in/ezgiuygun/" target="_blank">Linkedin</a>
                    <a style={{ color: "#AF0C48" }} href="mailto:ezgiuygn@gmail.com" target="_blank">Email</a>
                </ul>
            </div >
        </>
    )
}