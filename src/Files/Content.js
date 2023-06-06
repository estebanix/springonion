import React, {useState, useEffect} from "react";
import aidData from "../Imports/aid-data";
import calendarData from "../Imports/calendar-data";
import blogData from "../Imports/blog-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {faLocationDot, faCalendarDays, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import Carousel from 'react-elastic-carousel';
import img from 'C:/Users/dakis/Documents/VS/veterina/src/Images/about-onion.jpg';
import { Link } from "react-router-dom";


export default function Content(props){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const blog = blogData.map(dat => {
   
        return <div className="aid--container">
            <div className="aid--container-img" style={{backgroundImage:`url(${require(`../Images/aid-data-images/${dat.coverImg}`)})`}}></div>
            <div className="aid--container-title"><h3>{dat.title}</h3></div>
        </div>
    })

    const aboutTitle = "What is\nthe Spring Onion?"

    const events = calendarData.map(dat => {
        return <div key={dat.id} className="calendar--box">
            <h3>{dat.title}</h3>
            <div className="calendar--box-icons">
                <p><FontAwesomeIcon icon={faLocationDot}/> {dat.location}</p>
                <p className="icon--right"><FontAwesomeIcon icon={faCalendarDays} /> {dat.date}</p>
            </div>
            <button className="calendar--btn"><a href={dat.link}>More information <FontAwesomeIcon icon={faFacebook} /></a></button>
        </div>
    })

    const components = aidData.map(dat => {
        const handleButtonClick = (data) => {
            window.scrollTo(0, 0);
            props.handleClick(data);
          };
   
        return <div key={dat.id} className="blog--container">
            <div className="blog--container-img" style={{backgroundImage:`url(${require(`../Images/${dat.coverImg}`)})`}}></div>
            <div className="blog--container-title">
                <h3>{dat.title}</h3>
                <Link to="/currentRecipe"><button onClick={() => handleButtonClick(dat)} 
                    className="blog-more-btn">Read more <FontAwesomeIcon icon={faChevronRight} /></button></Link>
            </div>
        </div>
    })

    const width = () => {
        if (991 >= windowWidth && windowWidth > 767) {
          return 2;
        }
        if (1199 >= windowWidth && windowWidth >= 992) {
          return 2.5;
        }
        if (windowWidth >= 1200) {
          return 3;
        }
        return 1;
      };
      
      



    return(
        <main className="content--box">
            <div className="blog" style={{overflow: "hidden"}}>
                <div className="blog-nav">
                    <h2>Recipes</h2>
                    <Link to="/recipes" onClick={() => {
                    window.scroll(0, 0);
                    }}><button className="blog-btn">Show more <FontAwesomeIcon icon={faChevronRight} /></button></Link>
                </div>
                <div className="blog-content">
                    <Carousel itemsToShow={width()}
                              enableSwipe={true}
                              pagination={false}
                              transitionMs={1000} 
                    >
                    {components}
                    </Carousel>
                </div>
            </div>

            <div className="about--me">
                    <h2>{aboutTitle}</h2>
                    <p>Here you will find out how this project came about, what is behind it and what is its goal.</p>
                    <img src={img} />
                    <div className="about--me-icons">
                        <Link style={{ textDecoration: 'none' }} to="/about"><button onClick={() => window.scrollTo(0, 0)} className="about--btn">More about the project</button></Link>
                        <div className="about--me-i"><FontAwesomeIcon icon={faInstagram} /></div>
                        <div className="about--me-i"><FontAwesomeIcon icon={faFacebook} /></div>
                    </div>
            </div>

            <div className="blog">
                <div className="blog-nav">
                    <h2>Blog</h2>
                    <Link to="/blogs" onClick={() => {
                    window.scroll(0, 0);
                    }}><button className="blog-btn">Show more <FontAwesomeIcon icon={faChevronRight} /></button></Link>
                </div>
                <div className="blog-content">
                    <Carousel className="carousal--element"
                        itemsToShow={width()}
                        enableSwipe={true}
                        pagination={false}
                        transitionMs={1000} 
                    >
                    {blog}
                    </Carousel>
                </div>
            </div>
            <div className="calendar">
                <h2>Calendar of events</h2>
                {events}
            </div>
        </main>
    )
}