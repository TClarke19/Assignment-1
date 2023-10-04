import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const FormPage = ({ addRecipe }) => {
    const [newRecipe, setNewRecipe] = useState({ 
      name: '', 
      img: '', 
      ingdts: '', 
      directs: '', 
      desc: '' 
    });

    const [imageFile, setImageFile] = useState("");
  
    const change = (e) => {
      setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    };
  
    const submit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append('name', newRecipe.name);
      formData.append('ingdts', newRecipe.ingdts);
      formData.append('directs', newRecipe.directs);
      formData.append('desc', newRecipe.desc);


      fetch('http://127.0.0.1:27017/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(newRecipe),
      })
      .then(response => response.json())
      .then(data => {
        addRecipe(data);
        setNewRecipe({ 
          name: '', 
          img: '', 
          ingdts: '', 
          directs: '', 
          desc: '' 
        });
      })
      .catch((error) => {
        console.log('Error', error);
      });
    };
  
    return (
      <form onSubmit={submit}>
        <input 
          name="name" 
          value={newRecipe.name} 
          onChange={change} 
          placeholder="Name" 
          required 
        />
        <input  
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
          required 
        />
        <textarea 
          name="ingdts" 
          value={newRecipe.ingdts} 
          onChange={change} 
          placeholder="Ingredients" 
          required 
        />
        <textarea 
          name="directs" 
          value={newRecipe.directs} 
          onChange={change} 
          placeholder="Directions" 
          required 
        />
        <textarea 
          name="desc" 
          value={newRecipe.desc} 
          onChange={change} 
          placeholder="Description" 
          required 
        />
        <Button type="submit">Add Recipe</Button>
      </form>
    );
  }

export default FormPage;