import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";


export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);

    return (
        <>
            <div className={`w-screen h-auto relative transition-all duration-300 block ${darkMode ? "dark:bg-slate-800 text-white" : ""}`}>
                <h1 className="text-center font-inter text-3xl font-medium py-12">{words.projects}</h1>
                <div className="flex justify-center gap-20">
                    {words.project.map((item, index) => (
                        <div className={`border ${index === 0 ? 'border-[#DDEEFE] bg-[#DDEEFE]' : 'border-[#D9F6F1] bg-[#D9F6F1]'
                            } rounded-lg w-[27rem] h-[42rem] p-8 mb-20 relative`}
                            key={index}>
                            <h2 className="font-playfair font-bold text-[1.8rem] pb-4">{item.title}</h2>
                            <p className="font-inter font-normal text-[1rem] pb-4 w-[23rem]">{item.definition}</p>
                            <div className="flex gap-2 flex-wrap font-playfair font-bold justify-start">
                                {(item.title === "Pizza Project" || item.title === "Pizza Projesi") && (
                                    <div className="flex gap-2 flex-wrap font-playfair font-bold justify-start">
                                        {words.pizzaProjectTechnologies && words.pizzaProjectTechnologies.map((tech, index) => (
                                            <p key={index} className="border border-white rounded-full px-4 bg-white">
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                )}
                                {(item.title === "WITFLIX_Wiframe Project" || item.title === "WITFLIX_Wiframe Projesi") && (
                                    <div className="flex gap-2 flex-wrap font-playfair font-bold justify-start">
                                        {words.witflixProjectTechnologies && words.witflixProjectTechnologies.map((tech, index) => (
                                            <p key={index} className="border border-white rounded-full px-4 bg-white">
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between font-inter font-semibold text-[1.1rem] mb-16 pt-6 text-left">
                                <a href={item.githubLink} target="_blank">
                                    <button>{words.viewGit}</button></a>

                                <a href={item.appLink} target="_blank">
                                    <button>{words.goApp}<span>&#8594;</span></button></a>
                            </div>
                            <img className="absolute top-[28.85rem] left-0" src={item.imageUrl} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-20 pb-20 relative">
                    <p className="font-inter font-medium text-[2.6rem] w-[28rem] text-right relative z-10">{words.footerP}<img className="absolute bottom-[4.1rem] left-[43%] w-60 z-[-1]" src="Rectangle 40.svg" /></p>
                    <ul>
                        <a className="flex flex-col	text-base font-inter" style={{ color: "#1769FF" }} href={words.githubUrl} target="_blank">Github</a>
                        <a className="flex flex-col	text-base font-inter" href={words.personalBlogUrl} target="_blank">{words.personalBlogTitle}</a>
                        <a className="flex flex-col	text-base font-inter" style={{ color: "#0077B5" }} href={words.linkedinUrl} target="_blank">Linkedin</a>
                        <a className="flex flex-col	text-base font-inter" style={{ color: "#AF0C48" }} href={words.emailUrl} target="_blank">Email</a>
                    </ul>
                </div >
            </div>

        </>
    )
}