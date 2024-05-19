import React from "react";
import AboutImg from "../assets/images/about_me.jpg"
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
    return (
        <div className="bg-dark text-light py-5 full-width" id="about">
            <div className="container">
                <div className="flex-column-reverse flex-md-row row">
                    <div className="col-md-6 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                        <img className="img-fluid w-75 shadow" src={AboutImg} alt="about img" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-5">About me</h2>
                        <p className="text-start">Hi, I'm João Vitor</p>
                        <p className="text-start mb-5">
                            I am currently studying Software Engineering at UniSatc, and I am a front-end and mobile developer
                            with extensive knowledge in React and React Native. I have a strong desire to learn and am a proactive
                            individual with an easy adaptability.
                        </p>
                        <div className="mt-3 about-me-button">
                            <ViewMyWorkBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;