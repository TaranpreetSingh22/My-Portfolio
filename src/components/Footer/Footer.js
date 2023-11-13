import "./footer.css";
import linkedin from "../../icons/linkedin.png";
import github from "../../icons/github.png";
import top from "../../icons/upArrow.png";

export default function Footer(){
    const github_link="https://github.com/TaranpreetSingh22";

    const icons=[
        {
            key:'1',
            id:"linkedin",
            iconName:linkedin,
            iconAlt:'linkedin',
            link:"https://www.linkedin.com/in/taranpreetsingh-rababi-aa415a200"
        },

        {
            key:'2',
            id:"github",
            iconName:github,
            iconAlt:'github',
            link:"https://github.com/TaranpreetSingh22"
        },
    ]
    return(
        <>
            <footer>
                <div id="top">
                    <a href="#goto-top"><img src={top} alt="topIcon" /></a>
                </div>
                <div id="social-icons">
                   {icons.map(list=>
                        <div id={list.id} key={list.key}>
                            <a href={list.link}><img src={list.iconName} alt={list.iconAlt}/></a>
                        </div>
                   )}
                </div>

                <div id="copyright">
                    &copy; 2023 by <a href={github_link}>TaranpreetSingh</a>
                </div>
                
            </footer>
        </>
    )
}