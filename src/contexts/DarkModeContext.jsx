import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkModeChange = () => setDarkMode(!darkMode);;

    return (
        <DarkModeContext.Provider value={{ darkMode, handleDarkModeChange }}>
            {children}
        </DarkModeContext.Provider>
    )
}