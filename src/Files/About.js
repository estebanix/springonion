import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import img from 'C:/Users/dakis/Documents/VS/veterina/src/Images/about-onion.jpg';
import Footer from "./Footer";


export default function AboutHeader(){

    return(
        <main>
            <div className="about--box">
           <div className="homenation"><Link to="/"><FontAwesomeIcon icon={faHouse} style={{padding: "5% 0 0 5%"}} /></Link> | Projekt</div>
           <h3>About the project</h3>
           <p>The Spring Bulb project was created during the lockdown in the spring of 2020. Endless days spent always at home and often behind the stove resulted in this,
                that I decided to make my cooking instagram idea a reality. The concept was simple- vegan meals that I make myself.
                However, I was clear from the beginning about the direction this project would take. I didn't have any ambitions to have a lot of followers or perhaps to come up with some collaborations.
                I simply wanted to share my cooking experiments with friends and people who got into it and were interested. I also wanted it to be completely authentic
                and so the structure, rather than an actual recipe containing ingredient ratios and exact procedures, is a kind of allegory hiding behind my attempts at poetry cloaked in the guise of embarrassing jokes.
           </p>
           <div className="about--image-box">

           </div>
           <p>
           For me, cooking is not a strict procedure, it's an art form whose outcome can always be unique in some way. Recipes were characterized by simplicity, which I enjoy 
            but also by trying to be more or less healthy. Meals that, alongside an active lifestyle, I eat myself and know that they give me everything I need.
            However, there was another aspect to the Spring Onion concept. It was meant to spark an interest and desire in people to incorporate more plant-based foods into their diets.
            As I mentioned above, most of my followers were people from my neighborhood and they are not vegan. And neither am I (although at the time of inception I was strictly on a plant-based diet).
            But that doesn't matter at all. The world doesn't need a few perfect vegans, it needs a lot of imperfect ones. People who don't need to eat a piece of dead animal three times a day, and don't even consider a meal of beige to be "real food."
            The variation and variety of plant-based diets is huge, and it's far from just some imitation of meat-based meals. Many countries consume plant-based foods quite routinely and in much greater quantities than we do.
            They do not talk about the fact that, even if the cuisine is meat-based, very often it is a single portion quantity in our country, but in their country it is redistributed to the whole family as part of the main course.
            So that is the intention of Spring Onion. I hope that if you try some of the recipes you will enjoy them and eat similar type of meals more regularly. It is not about impoverishing ourselves, but about a nutritious and tasty way of eating that is kinder to nature and for which no one has to suffer.
           </p>
           <div className="about--link-box">
                <div className="right">
                    <h3>Samuel Kertés</h3>
                    <h4>Author</h4>
                </div>
           </div>
           <div className='footer-wave wave2'></div>
        </div>
        <Footer />
        </main>
    )
}