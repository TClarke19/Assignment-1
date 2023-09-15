export function recipeList( {recipes} ) {
    return (
        recpes.map((recipe, i) => {
            return <Recipe name={recipe.name}/>
        })
    )
}

function Recipes( {name} ) {
    return (
        <p>{name}</p>
    )
}