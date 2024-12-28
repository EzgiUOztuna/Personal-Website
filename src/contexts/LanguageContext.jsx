/*import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "tr" : "en")
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}*/