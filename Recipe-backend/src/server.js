import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';
import 'dotenv/config';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const multer = require('multer');
const app = express();
const PORT = 8000;

app.use(express.json());

const client = new MongoClient(process.env.MONGO_CONNECT);

(async function() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('mongo-data');
    const recipesCollection = db.collection('Recipes');

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null , 'recipe-app/public/images');
      },
      filename: function (req, file, cd) {
        cd(null, Date.now() + '-' + file.originalname);
      },
    });

    const upload = multer({ storage: storage });

    app.get(/^(?!\/api).+/, (req, res) => {
      res.sendFile(path.join(__dirname, '../build/public/index.html'));
    })

    app.get('/api/recipes', async (req, res) => {
      try {
        const recipesCursor = await recipesCollection.find();
        const recipes = await recipesCursor.toArray();
        res.json(recipes);
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while fetching recipes.');
      }
    });

    app.post('/api/removeRecipe', async (req, res) => {
      try {
        const recipeName = req.body.name;
        await recipesCollection.deleteOne({ name: recipeName });
        res.status(200).send();
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while removing the recipe.');
      }
    });

    app.post('/api/form', upload.single('image'), async (req, res) => {
      try {
        if (!req.file) {
          res.status(400).json({ error: 'No file uploaded' });
          return;
        }
        const imageUrl = req.file.path;
        const { name, description, ingredients } = req.body;

        const newRecipe = {
          name,
          description,
          ingredients,
          imageUrl,
        };

        await recipesCollection.insertOne(newRecipe);

        res.status(200).json({ success: true });
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred submitting form' + err.message);
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
})();