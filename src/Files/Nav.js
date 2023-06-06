import React from "react"
import logo from 'C:/Users/dakis/Documents/VS/veterina/src/Images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Nav(){
    return(
        <nav className="nav--bar">
            <div className="nav--icons">
                <div className="insta--menu">
                    <a href="https://www.instagram.com/_jarnacibulka_/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>

            </div>
        </nav>
    )
}