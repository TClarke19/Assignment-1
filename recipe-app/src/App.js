import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './Home';
import NavBar from './NavBar';
import FormPage from './FormPage';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/Recipes/')
      .then(response => setRecipes(response.data))
      .catch(err => console.log(err));
  }, []);

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
