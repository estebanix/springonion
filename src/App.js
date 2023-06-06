import React, {useEffect, useState}  from 'react';
import './App.css';
import Home from './Home';
import Blogs from './Blogs';
import { Route, Routes, json } from 'react-router-dom';
import CurrentBlog from './Files/CurrentBlog';
import Recipes from "./Recipes"
import CurrentRecipe from './Files/CurrentRecipe';
import About from './Files/About';



export default function App(){
    const [currentData, setCurrentData] = useState([]);
    const [recipeIng, setRecipeIng] = useState([]);

    

    useEffect(() => {
        const data = window.localStorage.getItem("current_blog");
        setCurrentData(JSON.parse(data) || []);
        const dataIng = window.localStorage.getItem("current_ingredients");
        setRecipeIng(JSON.parse(dataIng) || []);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("current_blog", JSON.stringify(currentData));
        window.localStorage.setItem("current_ingredients", JSON.stringify(recipeIng));
    }, [currentData, recipeIng]);
    

    function getData(e) {
        setCurrentData(e);
        if (window.location.pathname === '/currentBlog') {
          setRecipeIng([]);
        } else {
          setRecipeIng(e.ingredients || []);
         
        }
      }
      

    return(
        <Routes>
            <Route path='/' element={<Home handleClick={getData} />} />
            <Route path='/blogs' element={<Blogs handleClick={getData} />} />
            <Route path='/recipes' element={<Recipes handleClick={getData} />} />
            <Route path='/about' element={<About />} />
            <Route path='/currentBlog' element={<CurrentBlog data={currentData} />} />
            <Route path='/currentRecipe' element={<CurrentRecipe data={currentData} ingredients={recipeIng} />} />
        </Routes>
    )
}