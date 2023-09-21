
import './App.css';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './Home';
import NavBar from './NavBar';
import FormPage from './FormPage';
import NotFoundPage from './NotFoundPage';

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
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/form" element={ <FormPage /> } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
