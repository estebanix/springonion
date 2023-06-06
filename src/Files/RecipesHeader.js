import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function BlogHeader(){

    return(
        <main className="blog-header--box">
            <div className="blog-header--navigation">
            <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link> | Recipes
            </div>
            <h2>Recipes</h2>
            <p>Here you'll find plenty of recipes to indulge your senses and nourish your body.</p>
        </main>
    )
}