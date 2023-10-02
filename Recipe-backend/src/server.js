import express from 'express';
import path from 'path';
import { RecipeList } from '../../recipe-app/src/Recipe';

const app = express();
app.use(express.json());

const PORT = 8000;

app.get('/api/home', async (req, res) => {
    console.log(req.body);
    res.send(`Test Response. ${req.body.name}`);
});

app.post('/api/form', (req, res) => {
    const { name: recipeName } = req.params;
    const recipe = RecipeList.find(a => a.name === recipeName);

    if (!recipe) {
        res.send(`${recipeName} does not exist`)
    } 
});

app.listen(8000, () => {
    console.log(`Server is listening on port ${PORT}`)
});