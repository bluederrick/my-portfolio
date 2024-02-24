import React from "react";
import { getUrl } from "../../utilis";
import "./Hero.css";

const Hero = () => {
    return <div className="hero-section">

        <div className="float float-left">
            <h1 className="hero-title">Hi , I'am Derrick</h1>
            <p className="hero-p">I’m a full-stack developer with 5 years
                of experience using React and NodeJS.
                Reach out if you’d like to learn more! </p>
            <button className="btn"><a href="mailto:derricknsirim77@gmail.com">contact me</a></button>

        </div>
        <div className="float float-right">
            <img className="heroimage" src={getUrl("image (1).jpeg")} />
        </div>
    </div>;


};

export default Hero; 
