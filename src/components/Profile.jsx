import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Profile() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <>
            <div className={`w-screen h-auto bg-gray-100 relative transition-all block ${darkMode ? "dark:bg-slate-800 text-white" : ""}`}>
                <img className="absolute right-0 top-[-2rem]" src="Ellipse 12.svg" />
                <h3 className="text-center font-inter text-[2.25rem] font-medium py-[3rem]">{words.profile}</h3>
                <div className="flex justify-center items-center gap-16 pb-20">
                    <div className={`border border-white rounded-lg bg-white shadow-[rgba(82,82,82,0.5)] w-[30rem] p-8 ${darkMode ? "dark:bg-gray-100 text-black" : ""}`}>
                        <h4 className="font-playfair text-[#ea2678] font-normal text-[1.5rem] pb-[1.5rem] ml-[1rem]">{words.basicInformation}</h4>
                        <p className="flex justify-start items-baseline my-2 font-inter text-[1.12rem]"><span className="font-semibold min-w-40 text-left ml-4">{words.birthDate.label}</span>{words.birthDate.value}</p>
                        <p className="flex justify-start items-baseline my-2 font-inter text-[1.12rem]"><span className="font-semibold min-w-40 text-left ml-4">{words.city.label}</span>{words.city.value}</p>
                        <p className="flex justify-start items-baseline my-2 font-inter text-[1.12rem]"><span className="font-semibold min-w-40 text-left ml-4 ">{words.education.label}</span>{words.education.value}</p>
                        <p className="flex justify-start items-baseline my-2 font-inter text-[1.12rem]"><span className="font-semibold min-w-40 text-left ml-4">{words.role.label}</span>{words.role.value}</p>
                    </div>

                    <div className="w-[27.5rem] leading-8 relative">
                        <h4 className="font-playfair text-2xl font-normal leading-8 relative z-[10] ">{words.aboutMe} <img className="absolute top-[1.1rem] left-[-0.9rem] w-[5.62rem] -z-10" src="Rectangle 39.svg" /></h4>
                        <p className="relative font-inter text-base font-normal my-6 w-[30rem]">{words.aboutMeParagraph}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
