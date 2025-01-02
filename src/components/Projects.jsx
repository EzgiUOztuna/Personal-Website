import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";


export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <>
            <div className={`w-screen h-auto relative transition-all duration-300 block ${darkMode ? "dark:bg-slate-800 text-white" : ""}`}>
                <h1 className="text-center font-inter font-medium py-6 text-[1.5rem]
                               lg:py-12 lg:text-3xl
                               xl:py-12 xl:text-3xl">{words.projects}</h1>
                <div className={`flex flex-col justify-center items-center 
                                 lg:flex-row lg:gap-20
                                 xl:flex-row xl:gap-20 ${darkMode ? "dark:text-black" : ""}`}>
                    {words.project.map((item, index) => (
                        <div className={`border ${index === 0 ? 'border-[#DDEEFE] bg-[#DDEEFE]' : 'border-[#D9F6F1] bg-[#D9F6F1]'
                            } rounded-lg h-[38.8rem] mb-20 relative w-[24rem] p-5
                            lg:w-[27rem] lg:p-8 lg:mb-20 lg:h-[42rem]
                            xl:w-[27rem] xl:p-8 xl:mb-20 xl:h-[42rem]`}
                            key={index}>
                            <h2 className="font-playfair font-bold pb-4 text-[1.3rem]
                                           lg:text-[1.8rem]
                                           xl:text-[1.8rem]">{item.title}</h2>
                            <p className="font-inter font-normal text-[1rem] pb-4 w-[22.5rem]">{item.definition}</p>
                            <div className="flex gap-2 flex-wrap font-playfair font-bold justify-start">
                                {(item.title === "Pizza Project" || item.title === "Pizza Projesi") && (
                                    <div className="flex gap-2 flex-wrap font-playfair font-bold justify-start">
                                        {words.pizzaProjectTechnologies && words.pizzaProjectTechnologies.map((tech, index) => (
                                            <p key={index} className="border border-white rounded-full px-4 bg-white text-[0.8rem]
                                                                      lg:text-base
                                                                      xl:text-base">
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                )}
                                {(item.title === "WITFLIX_Wiframe Project" || item.title === "WITFLIX_Wiframe Projesi") && (
                                    <div className="flex gap-2 flex-wrap font-playfair font-bold justify-start">
                                        {words.witflixProjectTechnologies && words.witflixProjectTechnologies.map((tech, index) => (
                                            <p key={index} className="border border-white rounded-full px-4 bg-white text-[0.8rem]
                                                                      lg:text-base
                                                                      xl:text-base">
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between font-inter font-semibold text-[1rem] mb-0 pt-6 text-left
                                            lg:text-[1.1rem] lg:mb-16
                                            xl:text-[1.1rem] xl:mb-16">
                                <a href={item.githubLink} target="_blank">
                                    <button>{words.viewGit}</button></a>

                                <a href={item.appLink} target="_blank">
                                    <button>{words.goApp}<span>&#8594;</span></button></a>
                            </div>
                            <img className="absolute top-[27rem] left-0
                                            lg:top-[28.85rem]
                                            xl:top-[28.85rem]" src={item.imageUrl} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-9 pb-20 relative px-7
                                lg:gap-20 lg:px-0
                                xl:gap-20 xl:px-0">
                    <p className="font-inter font-medium text-[1.8rem] w-[24rem] text-right relative z-10
                                  lg:text-[2.6rem] lg:w-[28rem]
                                  xl:text-[2.6rem] xl:w-[28rem]">{words.footerP}<img className="absolute bottom-[5.5rem] left-[35%] w-40 z-[-1]
                                  lg:w-60 lg:bottom-[4.1rem] lg:left-[43%]
                                  xl:w-60 xl:bottom-[4.1rem] xl:left-[43%]" src="Rectangle 40.svg" /></p>
                    <ul>
                        <a className="flex flex-col	text-[0.9rem] font-inter
                                      lg:text-base
                                      xl:text-base" style={{ color: "#1769FF" }} href={words.githubUrl} target="_blank">Github</a>
                        <a className="flex flex-col font-inter text-[0.9rem]
                                     lg:text-base
                                    xl:text-base" href={words.personalBlogUrl} target="_blank">{words.personalBlogTitle}</a>
                        <a className="flex flex-col font-inter text-[0.9rem]
                                     lg:text-base
                                    xl:text-base" style={{ color: "#0077B5" }} href={words.linkedinUrl} target="_blank">Linkedin</a>
                        <a className="flex flex-col font-inter text-[0.9rem]
                                      lg:text-base
                                      xl:text-base" style={{ color: "#AF0C48" }} href={words.emailUrl} target="_blank">Email</a>
                    </ul>
                </div >
            </div>

        </>
    )
}