import "./education.css";

export default function Education(){
    const education_details=[
        {
            key:'1',
            institute:"Jain College Of Engineering and Technology Hubli.",
            qualification:"B.E in Computer Science and Engineering (CSE)",
            year:"2019-2023",
            desc:"",
            score:"8.58 CGPA"
        },

        {
            key:'2',
            institute:"Sukruti INDP PU Science College.",
            qualification:"PCMCS",
            year:"2017-2019",
            desc:"",
            score:"82.33%"
        },

        {
            key:'3',
            institute:"KLE's M R Sakhare English Medium School.",
            qualification:"SSLC",
            year:"2017",
            desc:"",
            score:"81.44%"
        },

        {
            key:'4',
            institute:"GTTC Hubli.",
            qualification:"Web Development",
            year:"20 Jun 2023 to 25 Aug 2023",
            desc:"A hands on training course of web development, a fullstack course where frontend as Html,Css,Js and backend as Java(jsp and servlet).",
            score:""
        },
    ];

    function isCourse(key,desc,score){
        if(key==='4'){
            return <div>{desc}</div>
        }
        else{
            return <div>{score}</div>
        }
    }
    
    return(
        <>
            <section id="Education_section">
                <div id="education-title">Education</div>
                <div id="edu-details">
                    {education_details.map(list=>
                        <div id="edu-div" key={list.key}>
                            <div>{list.institute}</div>
                            <div>{list.qualification}</div>
                            <div>{list.year}</div>
                            {isCourse(list.key,list.desc,list.score)}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}