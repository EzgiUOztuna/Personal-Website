import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Profile() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <>
            <div className={`w-screen h-auto bg-gray-100 relative transition-all block ${darkMode ? "dark:bg-[#2A262B] text-white" : ""}`}>
                <img className="absolute right-0 top-[-1.5rem] w-12
                                md:top-[-2.4rem] md:w-[4.87rem]
                                lg:top-[-2rem] lg:w-[4.87rem]
                                xl:top-[-2rem] xl:w-[4.87rem]" src="Ellipse 12.svg" />
                <h3 className="text-center font-inter font-medium py-6 text-[1.5rem]
                               md:text-[2.25rem] md:py-10
                               lg:text-[2.5rem] lg:py-[3rem]
                               xl:text-[2.5rem] xl:py-[3rem]">{words.profile}</h3>

                <div className="flex flex-col justify-center items-center gap-10 pb-8 px-5
                                md:flex-row md:gap-8 md:pb-16
                                lg:flex-row lg:gap-16 lg:pb-20
                                xl:flex-row	xl:gap-16 xl:pb-20">
                    <div className={`border-0 border-white rounded-lg bg-white w-[23rem] p-3 shadow-[.5rem_.5rem_rgba(82,82,82,0.5)]
                                    md:w-[24rem] md:p-6 
                                    lg:w-[30rem] lg:p-8 
                                    xl:w-[30rem] xl:p-8 ${darkMode ? "dark:bg-[#525252] text-white" : ""}`}>
                        <h4 className="font-playfair text-[#ea2678] font-normal text-[1.2rem] pb-[1.5rem] ml-[1rem]
                                       md:text-[1.5rem]
                                       lg:text-[1.5rem]
                                       xl:text-[1.5rem]">{words.basicInformation}</h4>
                        <p className="flex justify-start items-baseline my-2 font-inter text-[1rem]
                                      md:text-[1.12rem]
                                      lg:text-[1.12rem]
                                      xl:text-[1.12rem]"><span className="font-semibold min-w-40 text-left ml-4">{words.birthDate.label}</span>{words.birthDate.value}</p>
                        <p className="flex justify-start items-baseline my-2 font-inter text-[1rem]
                                      md:text-[1.12rem]
                                      lg:text-[1.12rem]
                                      xl:text-[1.12rem]"><span className="font-semibold min-w-40 text-left ml-4">{words.city.label}</span>{words.city.value}</p>
                        <p className="flex justify-start items-baseline my-2 font-inter text-[1rem]
                                      md:text-[1.12rem]
                                      lg:text-[1.12rem]
                                      xl:text-[1.12rem]"><span className="font-semibold min-w-40 text-left ml-4 ">{words.education.label}</span>{words.education.value}</p>
                        <p className="flex justify-start items-baseline my-2 font-inter text-[1rem]
                                      md:text-[1.12rem]
                                      lg:text-[1.12rem]
                                      xl:text-[1.12rem]"><span className="font-semibold min-w-40 text-left ml-4">{words.role.label}</span>{words.role.value}</p>
                    </div>

                    <div className="w-[23rem] leading-8 relative
                                    md:w-[24rem]
                                    lg:w-[27.5rem]
                                    xl:w-[27.5rem]">
                        <h4 className="font-playfair text-[1.2rem] font-normal leading-8 relative z-[10] px-2
                                       md:text-2xl
                                       lg:text-2xl
                                       xl:text-2xl">{words.aboutMe} <img className="absolute top-[1.1rem] left-[-0.7rem] w-[4.5rem] -z-10
                                       md:left-[-0.2rem] md:w-[5.5rem]
                                       lg:left-[-0.9rem] lg:w-[5.62rem]
                                       xl:left-[-0.9rem] xl:w-[5.62rem]" src="Rectangle 39.svg" /></h4>
                        <p className="relative font-inter text-base font-normal my-5 w-[23rem] px-2
                                      md:w-[24rem] md:my-6
                                      lg:w-[30rem] lg:my-6
                                      xl:w-[30rem] xl:my-6">{words.aboutMeParagraph}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
