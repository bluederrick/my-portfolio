import React from "react";
import { getUrl } from "../../utilis";
import "./Experience.css";
const Experience = () => {
    return <div className="skill_section">
        <h1 className="experience-title">EXPERIENCE</h1>
        <div className="skills-set">
            <div className="skills">
                <img src={getUrl("Node.png")} alt="" />
                <img src={getUrl("react.png")} alt="" />
                <img src={getUrl("html.png")} alt="" />
                <img src={getUrl("css.png")} alt="" />
                <img src={getUrl("mongoDB.png")} alt="" />
                <img src={getUrl("java.png")} width="90px" alt="" />
            </div>
        </div>
    </div>;
};

export default Experience;

