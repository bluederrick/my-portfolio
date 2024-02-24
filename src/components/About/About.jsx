import React from "react";
import { getUrl } from "../../utilis";
import "./About.css";

const About = () => {
    return <div>
        <div className="aboutSection">
            <h1 className="aboutHeading">About</h1>
            <div className="image">
                <img className="Aboutimg" src={getUrl("about.jpeg")} />
            </div>
            <div className="About-text">
                <div className="right-side">
                    <div className="Aboutinfo">
                        <img src={getUrl("backend.png")} className="img-skill" alt="" />
                        <div className="about-wrapper">
                            <h1>Frontend Developer</h1>
                            <p>I’m a front-end developer with experience
                                in building responsive and optimized sites</p>
                        </div>
                    </div>
                    <div className="Aboutinfo">
                        <img src={getUrl("frontend.png")} alt="" />
                        <div className="about-wrapper">
                            <h1>Backend Developer</h1>
                            <p>I have experience developing fast and
                                optimised back-end systems and APIs</p>
                        </div>;
                    </div>
                    <div className="Aboutinfo">
                        <img className="cyber" src={getUrl("cybersecurity-icon-28.jpg")} alt="" />
                        <div className="about-wrapper">
                            <h1>Cyber security</h1>
                            <p>an experience ethical hacker </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


};

export default About;
