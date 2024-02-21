import React, { useState } from "react";
import { getUrl } from "../../utilis";
import "./Navbar.css";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="Nav_container">
            <div className="section1">
                <a className="title" href="/">Portfolio</a>
                <img src={menuOpen ? getUrl("close.jpeg") : getUrl("hamburgerMenu.png")} alt="image.logo" className="hamburger" onClick={() => {
                    setMenuOpen(!menuOpen)
                }} />
            </div>
            {/* <div className="sub-container"> */}

            <ul className={` ${menuOpen && "menuOpenList"}`}
                onClick={() => setMenuOpen(false)}>


                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#product">Product</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            {/* </div> */}
        </nav>
    )
};
export default Navbar; 