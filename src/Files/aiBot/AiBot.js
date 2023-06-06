import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import img from 'C:/Users/dakis/Documents/VS/veterina/src/Images/loading.gif';

export default function AiBot(props) {
  const configuration = new Configuration({
    apiKey: 'YOUR KEY',
  });
  const openai = new OpenAIApi(configuration);
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const components_prompt = props.data.map((dat) => `${dat.name}`);
  const original_ingredients = props.inge.map(dat => dat.name)
  console.log(components_prompt)

  const components = props.data.map((dat) => {
    return <p>{dat.name}</p>;
  });

  function makeRecept(e) {
    if (e) {
      const userInput = e;
      setLoading(true);
      fetchSynopsis(userInput);
    }
  }

  
  async function fetchSynopsis(outline) {
    const oldRecipe = props.recepy;
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Generate a new vegan recipe inspired by ${oldRecipe} that closely resembles the original but excludes any ingredients the user wishes to avoid. Don't worry, we've got you covered! Even without ${components_prompt}, you can still cook an amazing meal.

      Utilize all the original ingredients from ${original_ingredients}, ensuring that no non-vegan components are present in the new recipe (e.g., tofu instead of paneer). However, please exclude ${components_prompt} as requested.
      
      To enhance the recipe while maintaining its vegan integrity, you have the option to introduce alternative vegan ingredients. If you think any other ingredient would work well, feel free to suggest it as an option.
      
      Additionally, provide an alternative version of the recipe that excludes the new ingredient, in case the user prefers not to use it. This ensures that all users can enjoy the recipe according to their preferences.
      
      Remember to provide clear instructions and measurements for each step, making it easy for anyone to follow along and recreate the recipe.
      
      Be creative and engaging in your recipe creation, ensuring an exciting and flavorful culinary experience while adhering to vegan principles. Let's get cooking!
      ###
      
      ###
      oldRecipe: Let's make a delicious vegan curry. We will need coconut milk, tofu, curry powder, vegetables, and rice. Sauté the tofu and vegetables in a pan, then add coconut milk and curry powder. Simmer until the flavors meld together. Serve with rice.
      missing ingredient: Tofu
      newRecipe: Oh, I see you don't have tofu. No worries! You can use tempeh as an alternative. Follow the same steps, but instead of tofu, use tempeh in the curry. If you prefer not to use tempeh, you can simply omit it and continue with the rest of the recipe. It will still be flavorful and satisfying. Enjoy!
      ###
      oldRecipe: How about a hearty lentil soup? Gather lentils, carrots, onions, garlic, vegetable broth, and spices. Sauté the onions and garlic, then add lentils, carrots, and vegetable broth. Simmer until the lentils are tender. Season with your favorite spices.
      missing ingredient: Carrots
      newRecipe: No carrots? No problem! You can use diced potatoes as an alternative. The rest of the recipe remains the same. Just replace carrots with diced potatoes and continue with the cooking instructions. If you prefer not to use potatoes, simply omit them and proceed with the lentil soup. It will still be delicious and comforting.
      ###
      oldRecipe: Let's make a refreshing quinoa salad. Combine cooked quinoa, diced cucumbers, cherry tomatoes, bell peppers, lemon juice, olive oil, and herbs. Toss everything together and season with salt and pepper.
      missing ingredient: Bell peppers
      newRecipe: If you don't have bell peppers, no worries! You can use diced tomatoes instead. Add the diced tomatoes to the salad along with the other ingredients. If you prefer not to use tomatoes, simply omit them and proceed with the rest of the salad. It will still be a delightful and refreshing quinoa salad.
      ###
      oldRecipe: How about some vegan banana bread? You'll need ripe bananas, flour, plant-based milk, sugar, baking powder, and vanilla extract. Mash the bananas and mix them with the other ingredients. Bake until golden brown and enjoy!
      missing ingredient: Vanilla extract
      newRecipe: If you don't have vanilla extract, worry not! You can use almond extract as a flavorful alternative. Follow the same steps for making the banana bread, but instead of vanilla extract, add a teaspoon of almond extract to the batter. If you prefer not to use almond extract, you can simply omit it and proceed with the rest of the recipe. Enjoy your customized vegan banana bread!
      ###
      oldRecipe: Let's make a creamy vegan pasta Alfredo. Gather fettuccine pasta, cashews, nutritional yeast, garlic, lemon juice, and vegetable broth. Blend the cashews, nutritional yeast, garlic, lemon juice, and vegetable broth until smooth. Toss the sauce with cooked fettuccine pasta and serve.
      missing ingredient: Cashews
      newRecipe: If you don't have cashews, no problem! You can use cauliflower as a substitute. Blend the cooked cauliflower with nutritional yeast, garlic, lemon juice, and vegetable broth to create a creamy sauce. If you prefer not to use cauliflower, simply omit it and proceed with the rest of the recipe. The result will be a delicious and creamy vegan Alfredo pasta. Enjoy your customized dish!
      ###
      missing ingredient: ${components_prompt}
      newRecipe: 
      `,
      max_tokens: 600,
    });
    setRecipe(response.data.choices[0].text.trim());
    setLoading(false);
  }

  return (
    <main className='ai-bot--container'>
      {loading ? (
        <img className='loading-recipe--img' src={img} />
      ) : recipe ? (
        <div className='new--recipe'>
          <h3>New Recipe</h3>
          <p className='new-recipe'>{recipe}</p>
        </div>
      ) : (
        <>
          <h3>Choose what ingredient you're missing.</h3>
          <div className='ai--ing--choose'>{components}</div>
          <button
            className='ai-bot--container-btn'
            onClick={() => {
              setLoading(true);
              makeRecept(components_prompt);
            }}
          >
            Recipe
          </button>
        </>
      )}
    </main>
  );
}


