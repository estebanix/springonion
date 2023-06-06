import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";
import AiBot from "./aiBot/AiBot";
import img from '../Images/ai-chef.jpg';

export default function CurrentRecipe(props) {
  const [isAi, setIsAi] = useState(false);
  const [isClicked, setIsClicked] = useState([]);
  const [noCart, setNoCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setIsClicked(props.ingredients.map(ingredient => ({ ...ingredient, isClicked: false })));
  }, [props.ingredients]);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../Images/${props.data.coverImg}`);
        setImageUrl(image.default);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading image:", error);
        setIsLoading(false);
      }
    };

    loadImage();
  }, [props.data.coverImg]);

  function startBot() {
    setIsAi(oldState => !oldState);
  }

  function clickIngredience(id) {
    setIsClicked(old => {
      const updatedIngredients = old.map(ingredient => {
        if (ingredient.id === id) {
          return { ...ingredient, isClicked: !ingredient.isClicked };
        }
        return ingredient;
      });

      const noCartIngredients = updatedIngredients.filter(ingredient => ingredient.isClicked);

      setNoCart(noCartIngredients);

      return updatedIngredients;
    });
  }

  const component = isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="curr-blog--box">
      <div className="curr-blog--header">
        <div className="curr-blog--header-title">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link> | <Link to="/recipes">Recipes </Link>| <span>{props.data.title}</span>
        </div>
        <div className="curr-blog--img-box" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="curr-blog--titles">
          <p><FontAwesomeIcon icon={faCalendar} /> {props.data.date}</p>
          <p><FontAwesomeIcon icon={faClock} /> {props.data.duration}</p>
        </div>
      </div>
      <div className="curr-blog--content">
        <h1>{props.data.title}</h1>
        <div className="curr-blog--content-about">{props.data.about}</div>
        <div className="ai--box">
          <div className="ai--still">
            <div className="ingredients--box">
              <h4>Ingredients</h4>
              {isClicked.map(dat => (
                <div className="ingredients--item"
                  key={dat.id}
                  onClick={() => clickIngredience(dat.id)}
                  style={{
                    border: dat.isClicked ? "2px solid #327343" : "none",
                  }}
                >
                  {dat.name}
                </div>
              ))}
            </div>
            <div className="ai--bot">
              <img src={img} alt="AI chef" />
              <button onClick={startBot} className="ai--bot-btn">AI chef</button>
            </div>
          </div>
          {isAi && <AiBot data={noCart} recepy={props.data.content} inge={isClicked} />}
          <div className="curr-blog--content-text">
            <h3>Recept</h3>
            {props.data.content}
          </div>
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
