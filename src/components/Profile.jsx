import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import "./Profile.css";

export default function Profile() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            <div className={`profile-container ${darkMode ? "dark" : ""}`}>
                <img className="ellipse-12" src="Ellipse 12.svg" />
                <img className="rectangle-39" src="Rectangle 39.svg" />
                <h3 className="header-3">Profile</h3>
                <div className="info-cards">
                    <div className="basic-info-card">
                        <h4>Basic Information</h4>
                        <p><span className="label">Birth Date:</span> 28.03.1996</p>
                        <p><span className="label">City:</span> Izmir</p>
                        <p><span className="label">Education:</span> Hacettepe Ünv. Biyoloji Lisans, 2016</p>
                        <p><span className="label">Preferred Role:</span> Frontend, UI</p>
                    </div>

                    <div className="about-me">
                        <h4>About me</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                        <p>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                    </div>
                </div>
            </div>
        </>

    )
}
