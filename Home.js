import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../Styles/Home.css"
function Home(){
    return (
    <div className="home">
        <div className="about">
            <h2> Hi, My name is Joe!</h2>
            <div className="prompt"> 
            <p>
               I'm a software developer driven by the curiosity to learn new things.
            </p>
            <a href="https://www.linkedin.com/in/josephsteriti/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
            </a>
            <a href="mailto:?to=jsteriti22@gmail.com">
               <EmailIcon/>
            </a>    
            <a href="https://github.com/joesteriti" target="_blank" rel="noopener noreferrer">
                <GitHubIcon/>
            </a>
        </div>
        </div>
        
        <div className="aboutsection">
            <h1> About</h1>
            <div className="prompt2"> 
            <p>
               I'm from the Boston area and 
               I am a sophomore at Boston University.
               I study Computer Science and Economics. 
               I enjoy trying new restaurants and I have a dog named Beaux. 
            </p>
        </div>
        </div>

        <div className="skills"> 

        <h1>Skills</h1>

        <ol className="list">
            <li className="item">
            <h2>Languages</h2>
            <span> JavaScript, Java, Python</span>
            </li>
        </ol>
        
        </div>
    </div>
    );
}

export default Home;