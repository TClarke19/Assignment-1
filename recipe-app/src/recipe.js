export function recipeList( {recipes} ) {
    return (
        recipes.map((recipe, i) => {
            return <Recipe key={i} name={recipe.name} />
        })
    )
}

function Recipe( {name} ) {
    return (
        <p>{name}</p>
    )
}

export default Recipe;