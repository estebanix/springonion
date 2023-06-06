import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function BlogHeader(){

    return(
        <main className="blog-header--box">
            <div className="blog-header--navigation">
            <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link> | Blog
            </div>
            <h2>List of articles</h2>
            <p>Articles dealing with a healthy cruelty-free lifestyle.</p>
        </main>
    )
}