import React from "react";
import logo from '../src/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";


export default function Footer(){
    return(
        <footer className="footer--box">
            <img className="footer--logo" src={logo} alt="Logo" />
            <div className="social--links">
                <a href="https://www.instagram.com/_jarnacibulka_/">
                            <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="mailto:samuelkertes@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            <div className="footer--info">
                <Link onClick={() => window.scrollTo(0, 0)} to="/recipes"><p className="footer--info-link">Recipes</p></Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="/blogs"><p className="footer--info-link">Blog</p></Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="/about"><p className="footer--info-link">About</p></Link>
                <p className="footer--info-rights">Created by <span><a href="https://samuelkertes.cz/">samuelkertes.cz</a></span></p>
            </div>
        </footer>
    )
}
