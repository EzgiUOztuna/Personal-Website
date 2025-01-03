import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Skills() {

    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <div className={`w-screen h-112 relative transition-all block ${darkMode ? "dark:bg-[#484148] text-white" : ""}`}>
            <img className="absolute top-[9.7rem] w-[3.87rem]
                            md:top-[17rem] md:w-[6.93rem]
                            lg:top-[20.5rem] lg:w-[6.93rem]
                            xl:top-[20.5rem] xl:w-[6.93rem]" src="Rectangle 22.svg" />
            <h2 className="text-center font-inter text-[1.5rem] font-medium py-6
                            md:text-[2.25rem] md:py-10
                            lg:text-[2.5rem] lg:py-12
                            xl:text-[2.5rem] xl:py-12">{words.skills}</h2>

            <div className="flex flex-wrap relative mx-auto pb-14 w-[15rem] gap-[1rem] items-center justify-center
                            md:pb-28 md:w-[35rem] md:gap-[2rem]
                            lg:pb-28 lg:w-[58rem] lg:gap-[2.18rem]
                            xl:pb-28 xl:w-[58rem] xl:gap-[2.18rem]">
                {words.programs.map((program, index) => (
                    <div key={index} className="w-[90px] text-center
                                                md:w-[120px]
                                                lg:w-[120px]
                                                xl:w-[120px]">
                        <img className="w-[60px] mx-auto
                                        md:w-[35rem]
                                        lg:w-[35rem]
                                        xl:w-[35rem]" src={program.image} />
                        <span className="font-inter font-medium leading-[2.25rem] mx-auto">{program.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}