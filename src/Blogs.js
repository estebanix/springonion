import React from "react";
import Nav from "./Files/Nav";
import Footer from "./Files/Footer";
import BlogHeader from "./Files/BlogHeader";
import BlogContent from "./Files/BlogContent";

export default function Blogs(props){
    
    function getItDone(e){
        props.handleClick(e)
    }

    return(
        <main className="main--screen blogs">
            <BlogHeader />
            <div className='blog-wave wave'></div>
            <BlogContent handleClick={getItDone} />
            <div className='footer-wave wave2'></div>
            <Footer />
        </main>   
    )
}
