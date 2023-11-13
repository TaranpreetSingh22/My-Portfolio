import './about.css';

export default function About(){
    const about_me='I am TaranpreetSingh, born and raised in Hubli karnataka India.I Have completed my Graduation from Jain College of Engineering and Technology Hubli Affiliated to Visvesvaraya Technological University(VTU) Belagavi with 8.58 CGPA.';
    const skills=[
        { 
            key:'1',
            skill:'Python'
        },

        { 
            key:'2',
            skill:'Java'
        },

        { 
            key:'3',
            skill:'HTML and CSS'
        },

        { 
            key:'4',
            skill:'JavaScript'
        },

        { 
            key:'5',
            skill:'React.js'
        },
    ];

    const hobbies=[
        {
            key:'1',
            hobby:'Playing Video Games'
        },

        {
            key:'2',
            hobby:'Playing Chess and other indoor Games'
        },

        {
            key:'3',
            hobby:'Listening to Music'
        },    
        
        {
            key:'4',
            hobby:'Drawing'
        },    

        {
            key:'5',
            hobby:'Watching Anime'
        },    
    ];

    return (
        <>
            <section id="About_section">
                <div id="about-title">ABOUT ME</div>
                <div id='about-content'>
                    <p>{about_me}</p>
                </div>
                <div id='skills-and-hobbies'>
                    <div id='skills'>
                        <div><span>My Skills</span></div>
                        <div>
                            <ul>
                                {skills.map(list=>
                                    <li key={list.key}>{list.skill}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div id='hobbies'>
                        <div><span>My Hobbies</span></div>
                        <div>
                            <ul>
                                {hobbies.map(list=>
                                    <li key={list.key}>{list.hobby}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}