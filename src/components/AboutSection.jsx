import React from "react";
import AboutImg from "../assets/images/about_me.jpg"
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
    return (
        <div className="bg-dark text-light py-5" id="about">
            <div className="container">
                <div className="flex-column-reverse flex-md-row row">
                    <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                        <img className="img-fluid w-75 shadow" src={AboutImg} alt="about img" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-5">About me</h2>
                        <p className="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sunt, consequatur aliquid itaque ipsum delectus nesciunt voluptas eaque beatae saepe tempore at a sequi ratione voluptatibus. Velit totam incidunt sunt.</p>
                        <p className="text-start mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae doloribus dicta, amet porro voluptate labore. Laboriosam quis pariatur quo itaque perspiciatis accusantium non assumenda est sed, laborum sint velit nulla?</p>
                        <ViewMyWorkBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;