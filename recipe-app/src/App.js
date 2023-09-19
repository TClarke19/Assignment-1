import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Recipe from './recipe';

function App() {

  const [recipes, setRecipes] = useState(null);

  useEffect( () => {
    fetch("./recipes.json")
    .then( response => response.json())
    .then( setRecipes )
    .catch( e => console.log(e.message))
  }, [] )

  if (recipes == null) return <div>Loading..</div>;

  return (
    <div className="App">
      <header className="App-header">
        {recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} />)} 
      </header>
    </div>
  );
}

export default App;
