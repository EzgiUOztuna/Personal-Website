import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import "./Projects.css";

export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <>
            <div className={`projects-container ${darkMode ? "dark" : ""}`}>
                <h1>Projects</h1>
                <div className="projects">
                    <div className="project-1">
                        <h2>Random Jokes</h2>
                        <p className="def-project1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                        <div className="programs">
                            <p className="react">react</p>
                            <p className="vercel">vercel</p>
                            <p className="axios">axios</p>
                            <p className="router">router</p>
                        </div>
                        <div className="buttons">
                            <button className="view-git">View on Github</button>
                            <button className="go-app">Go to app  <span>&#8594;</span></button>
                        </div>
                        <img className="group-104" src="Group 104.svg" />
                    </div>

                    <div className="project-2">
                        <h2>Are you bored?</h2>
                        <p className="def-project2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                        <div className="programs">
                            <p className="react">react</p>
                            <p className="redux">redux</p>
                            <p className="axios">axios</p>
                            <p className="router">router</p>
                            <p className="vercel">vercel</p>
                        </div>
                        <div className="buttons">
                            <button className="view-git">View on Github</button>
                            <button className="go-app">Go to app  <span>&#8594;</span></button>
                        </div>
                        <img className="group-103" src="Group 103.svg" />
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

            </div >
        </>
    )
}