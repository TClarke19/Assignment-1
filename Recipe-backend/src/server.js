import express from 'express';
import fs from 'fs';
import path from 'path';
//import { RecipeList } from '../../recipe-app/src/Recipe';

const app = express();
app.use(express.json());

const PORT = 8000;

app.post('/api/home', (req, res) => {
    const newRecipe = req.body;

    fs.readFile(path.join(__dirname, '../recipe-app/public/recipes.json'), 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file');
        } else {
            const recipes = JSON.parse(data);
            recipes.push(newRecipe);

            fs.writeFile(path.join(__dirname, 'recipe-app/public/recipes.json'), JSON.stringify(recipes, null, 4), (err) => {
                if (err) {
                    console.log('Error writing file')
                }
            });
        }
    });
    res.json(newRecipe);
});

app.listen(8000, () => {
    console.log(`Server is listening on port ${PORT}`)
});