import "./projects.css";

export default function Projects(){
    const project_details=[
        {
            project_key:'1',
            project_name:"Visionless Email For Visually Impaired Users",
            project_desc:"An exe desktop application built using python, it is a project that was made for visually impaired users that lets them send emails using their voice instead of relying on third person.It converts the voice to text and send the mail based on some voice commands, it also has a voice bot feature that guides the user or interact with system.The received mails are also read by converting text to speech through speaker.",
            project_skills:"Python",
            project_sourceCode:"View source Code",
            project_sourceCode_link:"https://github.com/TaranpreetSingh22/Vision-Less-Email-System",
            project_live:"View live project",
            project_live_link:"none"
        },

        {
            project_key:'2',
            project_name:"Tic Tac Toe",
            project_desc:"An exe desktop application built using python, it has simple GUI made using tkinter , its a two player mode game where any player should choose either x or o if any user makes three conscutive x's or o's then that player is declared as winner or the game gets tied.",
            project_skills:"Python",
            project_sourceCode:"View source Code",
            project_live:"View live project",
            project_sourceCode_link:"https://github.com/TaranpreetSingh22/Tic-tac-toe",
            project_live_link:"none"
        },

        {
            project_key:'3',
            project_name:"Modified Tic Tac Toe",
            project_desc:"An exe desktop application built using python,its same as the previous project but the modified thing is that here there is no 2nd player instead the player will play against computer i.e x will be the player and o will be the computer.",
            project_skills:"Python",
            project_sourceCode:"View source Code",
            project_live:"View live project",
            project_sourceCode_link:"https://github.com/TaranpreetSingh22/Modified-Tic-tac-toe",
            project_live_link:"none"
        },

        {
            project_key:'4',
            project_name:"Tic Tac Toe web",
            project_desc:"A game made using Reactjs, its a two player mode game where any player should choose either x or o if any user makes three conscutive x's or o's then that player is declared as winner or the game gets tied.",
            project_skills:"HTML, CSS, JavaScript and React.js",
            project_sourceCode:"View source Code",
            project_sourceCode_link:"https://github.com/TaranpreetSingh22/Tic-Tac-Toe-Web/tree/main",
            project_live:"View live project",
            project_live_link:"https://taranpreetsingh22.github.io/Tic-Tac-Toe-Web/",
            project_type:"web",
        },

        {
            project_key:'5',
            project_name:"Simple Calculator",
            project_desc:"A simple arithematic operations calculator made using React.js.",
            project_skills:"HTML, CSS, JavaScript and React.js",
            project_sourceCode:"View source Code",
            project_sourceCode_link:"https://github.com/TaranpreetSingh22/Simple-Calculator/tree/main",
            project_live:"View live project",
            project_live_link:"https://taranpreetsingh22.github.io/Simple-Calculator/",
            project_type:"web",
        },

        {
            project_key:'6',
            project_name:"Random Quotes Generator",
            project_desc:"Random quotes api generates a new random quote, it uses two web API's a quote API and a random image API, it also has a about author button which displays the author description.",
            project_skills:"HTML, CSS, JavaScript and React.js",
            project_sourceCode:"View source Code",
            project_sourceCode_link:"https://github.com/TaranpreetSingh22/Simple-Random-Quotes",
            project_live:"View live project",
            project_live_link:"https://randomquotes-q8g7.onrender.com/",
            project_type:"web",
        },
    ];

    const checkWeb=(isWeb,live,liveLink)=>{
        if(isWeb==='web'){
            return <div id="live-div"><a href={liveLink}><div>{live}</div></a></div>
        }
        else{
            return "";
        }
    }

        
    return(
        <>
            <section id="Projects_section">
                <div id="projects-section-title">Projects</div>
                <div id="all-projects">
                    {project_details.map(list=> 
                            <div key={list.project_key} id="project-div">
                                <div>
                                    <div>Title</div>
                                    <div>{list.project_name}</div>
                                </div>
                                <div>{list.project_desc}</div>
                                <div>
                                    <div>Skills Used</div>
                                    <div>{list.project_skills}</div>
                                </div>
                                <div id="view-src-code"><a href={list.project_sourceCode_link}><div>{list.project_sourceCode}</div></a></div>
                                {checkWeb(list.project_type,list.project_live,list.project_live_link)}
                            </div>
                    )}
                </div>
            </section>
        </>
    )
}