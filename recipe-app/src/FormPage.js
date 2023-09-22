import { useState } from "react";

const FormPage = ({ addRecipe }) => {
    const [newRecipe, setNewRecipe] = useState({ name: '', img: '', ingdts: '', directs: '', desc: '' });
  
    const change = (e) => {
      setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    };
  
    const submit = (e) => {
      e.preventDefault();
      addRecipe(newRecipe);
      setNewRecipe({ name: '', img: '', ingdts: '', directs: '', desc: '' });
    };
  
    return (
      <form onSubmit={submit}>
        <input name="name" value={newRecipe.name} onChange={change} placeholder="Name" required />
        <input name="img" value={newRecipe.img} onChange={change} placeholder="Image URL" required />
        <textarea name="ingdts" value={newRecipe.ingdts} onChange={change} placeholder="Ingredients" required />
        <textarea name="directs" value={newRecipe.directs} onChange={change} placeholder="Directions" required />
        <textarea name="desc" value={newRecipe.desc} onChange={change} placeholder="Description" required />
        <button type="submit">Add Recipe</button>
      </form>
    );
  }

export default FormPage;