import express from 'express';
import fs from 'fs';
import path from 'path';
import { MongoClient } from 'mongodb';
//import { RecipeList } from '../../recipe-app/src/Recipe';

const app = express();
app.use(express.json());
const PORT = 8000;

const client = new MongoClient('mongodb://127.0.0.1:27017');
client.connect();

const db = client.db('mongo-data');
const recipesCollection = db.collection('Recipes')

app.get('/api/Recipes/', async (req, res) => {
    try {
      const recipesCursor = await recipesCollection.find();
      const recipes = await recipesCursor.toArray();
      res.json(recipes);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while fetching recipes.');
    }
  });

app.post('/api/removeRecipe', (req,res) => {
    const recipes = JSON.parse(data);
    recipes.push(newRecipe);

    fs.writeFile(path.join(__dirname, 'recipe-app/public/recipes.json'), JSON.stringify(recipes, null, 4), (err) => {
        if (err) {
            console.log(`Error writing file ${err}`)
        }
    });
});

app.listen(8000, () => {
    console.log(`Server is listening on port ${PORT}`)
});