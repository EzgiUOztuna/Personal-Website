import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

function IntroductionDefinition() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <div className={`flex justify-center items-start pt-20 gap-0  ${darkMode ? "dark:bg-[#2A262B] text-white" : ""}`}>
            <div className="relative w-[20rem] font-inter text-[1rem] font-medium z-10 px-4
                            md:w-[30rem] md:text-[2rem]
                            lg:w-[40rem] lg:text-[2.62rem]
                            xl:w-[40rem] xl:text-[2.62rem]">
                <img className="absolute left-[4.9rem] top-[2.8rem] z-[-1] h-5 w-[3.75rem]
                                md:top-[4.7rem] md:h-[1.94rem] md:left-[-2.4rem] md:w-[9.25rem]
                                lg:top-[6.2rem] lg:h-[1.94rem] lg:left-[-1.5rem] lg:w-[9.25rem]
                                xl:top-[6.2rem] xl:h-[1.94rem] xl:left-[-1.5rem] xl:w-[9.25rem]" src="Rectangle 2.svg" />
                <p className="w-[12.5rem] ml-20 
                              md:w-[38.25rem] md:ml-0
                              lg:w-[38.25rem] lg:ml-0 
                              xl:w-[38.25rem] xl:ml-0">{words.title}</p>
                <p className="w-[12.5rem] ml-20 
                              md:w-[29rem] md:ml-0
                              lg:w-[38.25rem] lg:ml-0 
                              xl:w-[38.25rem] xl:ml-0">{words.definition}</p>
                <div>
                    <div className="flex gap-2.5 h-[2.18rem] items-center pt-9 pb-4 ml-20
                                    md:gap-4 md:h-[2.18rem] md:pt-16 md:pb-6 md:ml-0
                                    lg:gap-4 lg:h-[2.18rem] lg:pt-20 lg:pb-8 lg:ml-0
                                    xl:gap-4 xl:h-[2.18rem] xl:pt-20 xl:pb-8 xl:ml-0">
                        {words.socialMedia.map((item, index) => (
                            <a key={index} href={item.url} target="_blank">
                                <i className={item.iconClass}></i>
                            </a>
                        ))}
                    </div>
                    <p className="pb-9 w-[15rem] font-inter text-xs font-normal ml-20
                                  md:ml-0 md:w-[28.5rem] md:text-base md:pt-1 md:pb-16
                                  lg:ml-0 lg:w-[28.5rem] lg:text-base lg:pt-2 lg:pb-16
                                  xl:ml-0 xl:w-[28.5rem] xl:text-base xl:pt-2 xl:pb-16" dangerouslySetInnerHTML={{ __html: words.email }} />
                </div>
            </div>
            <img className="w-[9rem] mr-20 p-2
                            md:w-[15rem] md:mr-0
                            lg:w-[20rem] lg:mr-0 
                            xl:w-[20rem] xl:mr-0 " src="Group 102.svg" />
        </div>
    )
}

export default IntroductionDefinition