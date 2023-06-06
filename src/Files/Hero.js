import React from "react";
import Nav from "./Nav";
import img from 'C:/Users/dakis/Documents/VS/veterina/src/Images/hero-image.jpg';

export default function Hero(){
    const title = "Spring Onion"
    return(
        <main className="hero--box">
            <Nav />
            <img className="hero--img" src={img} />
            <div className="hero--minibox">
                <h2 className="hero--title">{title}</h2>
                <p className="hero--text">Vegan recipes, Quick and easy</p>
                <p className="hero--text">...and with a pinch of AI</p>
            </div>
        </main>
    )
}