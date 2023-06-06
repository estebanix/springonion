import React from "react";
import Nav from "./Files/Nav";
import Footer from "./Files/Footer";
import RecipesHeader from "./Files/RecipesHeader";
import RecipesContent from "./Files/RecipesContent";

export default function Blogs(props){
    
    function getShitDone(e){
        props.handleClick(e)
    }

    return(
        <main className="main--screen blogs">
            <RecipesHeader />
            <div className='blog-wave wave'></div>
            <RecipesContent handleClick={getShitDone} />
            <div className='footer-wave wave2'></div>
            <Footer />
        </main>   
    )
}