import React from "react";
import "./home.css";
import bg from "./bg.mp4";

export default function Home() {
    const resume_link="https://drive.google.com/drive/folders/1C89pEdU9m9O7NwvBx_RLgNAZDuGMZY01";
    return(
        <>
            <section id="introduction_section">
              <div className="title">
                    <div>
                        <span>Hello, I am <span style={{"fontSize":"2em","fontWeight":"bold","color":"skyblue"}}>TaranpreetSingh</span></span>
                    </div>
                    <div>
                        <span>A Pssionate and Hardworking mindset Fresher, looking for a career in Web Development/Software Development.</span>
                    </div>
                        <div id="cv"><a href={resume_link}><div>View Resume</div></a></div>
                </div>
                
                <div className="wave">
                    <video autoPlay muted loop width="100%" height="100%">
                        <source src={bg} type="video/mp4" />
                    </video>
                </div>
            </section>
        </>
    )
}