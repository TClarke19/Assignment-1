import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './Home';
import NavBar from './NavBar';
import FormPage from './FormPage';
import NotFoundPage from './NotFoundPage';

function App() {

  useEffect( () => {
    fetch("./recipes.json")
    .then( response => response.json())
    .then( setRecipes )
    .catch( e => console.log(e.message))
  }, [] )
  

  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={ <HomePage recipes={recipes} /> } />
            <Route path="/form" element={ <FormPage addRecipe={addRecipe} /> } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
