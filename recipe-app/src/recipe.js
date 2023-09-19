export function recipeList( {recipes} ) {
    return (
        recipes.map((recipe, i) => {
            return <Recipe key={i} recipe={recipe} />
        })
    )
}

function Recipe( {recipe} ) {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.img} alt={recipe.name} />
            <p><strong>Ingredients:</strong> {recipe.ingdts}</p>
            <p><strong>Directions:</strong> {recipe.directs}</p>
            <p><strong>Description:</strong> {recipe.desc}</p>
        </div>
    )
}

export default Recipe;
