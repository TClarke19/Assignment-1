import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { recipeList } from './recipe';

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        {recipes.map((recipe) => <Recipe key={recipe.id} {...recipe} />)} 
      </header>
    </div>
  );
}

export default App;
