//import { useState, useEffect } from 'react';
import Recipe from './Recipe';

const HomePage = ( {recipes, setRecipes} ) => {
       
//const [recipes, setRecipes] = useState(null);

if (recipes == null) return <div>Loading..</div>;

    return (
        <header className="App-header">
          {recipes.map((recipe, index) => <Recipe key={index} {...{recipe, recipes, setRecipes}} />)} 
        </header>
    );
}

export default HomePage;