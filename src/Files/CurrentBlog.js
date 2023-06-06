import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";

export default function CurrentBlog(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../Images/aid-data-images/${props.data.coverImg}`);
        setImageUrl(image.default);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [props.data.coverImg]);

  const component = isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="curr-blog--box">
      <div className="curr-blog--header">
        <div className="curr-blog--header-title">
          <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link> | <Link to="/blogs">Blog </Link> | <span>{props.data.title}</span>
        </div>
        <div className="curr-blog--img-box" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="curr-blog--titles">
          <p><FontAwesomeIcon icon={faClock} /> {props.data.duration}</p>
          <p><FontAwesomeIcon icon={faCalendar} /> {props.data.date}</p>
        </div>
      </div>
      <div className="curr-blog--content">
        <h1>{props.data.title}</h1>
        <div className="curr-blog--content-about">{props.data.intro}</div>
        <div className="curr-blog--content-text">
          {props.data.content}
        </div>
        <div className="curr-blog--content-conc">
          {props.data.conc}
        </div>
      </div>
    </div>
  );

  return (
    <main className="main--screen curr-blog">
      {component}
      <div className='footer-wave wave2'></div>
      <Footer />
    </main>
  );
}
