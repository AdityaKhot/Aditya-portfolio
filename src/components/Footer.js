import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Footer(){
    return(
        <div className = "footer-container">

            <div className = "copyright">
                &copy; Coded with React by Aditya Khot.
            </div>

            <div className = "socmed">
                <a href="https://in.linkedin.com/in/aditya-khot-5b1320217/" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={ faLinkedin } size = "2x"/></a>
                <a href="mailto:khotaditya22@gmail.com"><FontAwesomeIcon icon={ faEnvelope } size = "2x"/></a>

            </div>

        </div>
    );
}