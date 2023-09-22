export function RecipeList( {recipes, setRecipes} ) {
    return (
        recipes.map((recipe, i) => {
            return <Recipe key={i} recipe={recipe} setRecipes={setRecipes}/>
        })
    )
}

function Recipe( {recipe, recipes, setRecipes} ) {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <img style={{ width: '400px' }}src={recipe.img} alt={recipe.name} />
            <p><strong>Ingredients:</strong> {recipe.ingdts}</p>
            <p><strong>Directions:</strong> {recipe.directs}</p>
            <p><strong>Description:</strong> {recipe.desc}</p>
            <button onClick={ () => {
                let adjustedRecipe = [];
                for( let i=0; i<recipes.length; i++ ) {
                    if( recipes[i].name != recipe.name ) {
                        adjustedRecipe.push(recipes[i]);
                    }
                }
                setRecipes(adjustedRecipe);
            }}>Remove</button>
        </div>
    )
}

export default Recipe;
