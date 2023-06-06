import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faUtensils, faClockRotateLeft, faCow } from '@fortawesome/free-solid-svg-icons'

export default function Icons(){
    return(
        <main className="icons--box">
            <div className="icons--minibox"><FontAwesomeIcon icon={faUtensils} />Tasty</div>
            <div className="icons--minibox"><FontAwesomeIcon icon={faBowlFood} />Nutritiously</div>
            <div className="icons--minibox"><FontAwesomeIcon icon={faClockRotateLeft} />Simple</div>
            <div className="icons--minibox"><FontAwesomeIcon icon={faCow} />No violence</div>
        </main>
    )
}