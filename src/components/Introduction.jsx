import "./Introduction.css";
import { useState } from "react";

export default function Introduction() {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkModeChange = () => setDarkMode(!darkMode);

    return (
        <div className={`background ${darkMode ? "dark" : ""}`}>
            <input
                type="checkbox"
                id="darkmode-toggle"
                onChange={handleDarkModeChange}
            />
            <label htmlFor="darkmode-toggle">Dark Mode</label>
        </div>
    );
}
