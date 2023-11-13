import React from "react";
import './navbar.css';
import menu_image from "./menu.svg";
import { useState } from "react";

export default function Navbar() {
    const [flag,setFlag]=useState(false);
    const [visible,setVisible]=useState("");
    const [bg,setBg]=useState('');
    
    const toggle=()=>{
        if (flag===false){
            setVisible("flex");
            setBg("linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75))");
            setFlag(true);
        }
        else{
            setVisible("none");
            setBg('');
            setFlag(false);
        }
    };

    const hide=()=>{
        if(flag===true){
            setVisible("none");
            setFlag(false);
        }
    };

    return(
        <>
            <header id="goto-top">
                <nav>
                    <div id="menu-and-btn-div">
                        <div className="welcome">
                            <span>Welcome to my Portfolio</span>
                        </div>

                        <div id="menu-div">
                            <button className="menu-btn" id="toggle" onClick={toggle}>
                                <img src={menu_image} alt="menu" />
                            </button>
                        </div>
                    </div>

                   <ul className="menu-list" id="menu" style={{"display":visible,"backgroundImage":bg}}>
                        <li>
                            <a href="#introduction_section" onClick={hide}>Home</a>
                        </li>
                        <li>
                            <a href="#About_section" onClick={hide}>About</a>
                        </li>
                        <li>
                            <a href="#Education_section" onClick={hide}>Education</a>
                        </li>
                        <li>
                            <a href="#Projects_section" onClick={hide}>Projects</a>
                        </li>
                        <li>
                            <a href="#Contact_section" onClick={hide}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );

}