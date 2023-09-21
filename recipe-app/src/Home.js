import Recipe from './recipe';

const HomePage = () => {
    return (
        <header className="App-header">
          {Recipe.map((recipe, index) => <Recipe key={index} recipe={recipe} />)} 
        </header>
    );
}

export default HomePage;