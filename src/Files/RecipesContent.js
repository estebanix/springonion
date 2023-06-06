import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import CurrentBlog from "./CurrentBlog";
import aidData from "../Imports/aid-data";

export default function BlogContent(props){

    const [currentPage, setCurrentPage] = React.useState(1)
    const [postPerPage, setPostPerPage] = React.useState(3)
    const [clicked, setClicked] = React.useState(false)


    const blogs = aidData.map(dat => {
        const handleButtonClick = (data) => {
            window.scrollTo(0, 0);
            props.handleClick(data);
          };

        return <div className="big-blog--container" key={dat.id}>
            <div className="big-blog--container-img" style={{backgroundImage:`url(${require(`../Images/${dat.coverImg}`)})`}}></div>
            <div className="big-blog--container-content">
                <h3>{dat.title}</h3>
                <div className="overflow--blog-text">
                    <p>{dat.content}</p>
                </div>
                <Link to="/currentRecipe"><button onClick={() => handleButtonClick(dat)} className="big-blog-more-btn">
                    Read more <FontAwesomeIcon icon={faChevronRight} />
                </button></Link>
            </div>
        </div>
    })

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = blogs.slice(firstPostIndex, lastPostIndex)
    
    return(
        <main className="blog-content--box">
            {currentPost}
            <div className="blog--pagelist">
                <Pagination 
                    totalPosts={blogs.length}
                    postsPerPage={postPerPage}
                    setCurrentPages = {setCurrentPage}
                    isHeld = {clicked}
                    curr = {currentPage}
                />
            </div>
        </main>
    )
}