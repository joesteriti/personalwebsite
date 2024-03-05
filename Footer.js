import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://www.instagram.com/joesteriti/?hl=en" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/josephsteriti/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
         </a>  
          <a href="https://github.com/joesteriti" target="_blank" rel="noopener noreferrer">
              <GitHubIcon/>
          </a>
          <a href="mailto:?to=jsteriti22@gmail.com">
             <EmailIcon/>
          </a>  
      </div>
      <p> &copy; 2024 joesteriti.com</p>
    </div>
  );
}

export default Footer;