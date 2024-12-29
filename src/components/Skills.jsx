import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import "./Skills.css";
export default function Skills() {

    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`skills-container ${darkMode ? "dark" : ""}`}>
            <img className="rectangle-22" src="Rectangle 22.svg" />
            <h2 className="skills-header">Skills</h2>
            <img className="skills" src="skillBoxes.svg" />


        </div>
    )
}