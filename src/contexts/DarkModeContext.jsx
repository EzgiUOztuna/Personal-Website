import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DarkModeContext = createContext();

export default function DarkModeContextProvider({ children }) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    const handleDarkModeChange = () => setDarkMode(!darkMode);;

    return (
        <DarkModeContext.Provider value={{ darkMode, handleDarkModeChange }}>
            {children}
        </DarkModeContext.Provider>
    )
}