import express from 'express';

const app = express();
app.use(express.json());

const PORT = 8000;

app.get('/api/home', async (req, res) => {
    console.log(req.body);
    res.send(`Test Response. ${req.body.name}`);
});

app.get('/api/form', (req, res) => {
    res.send(``)
});

app.listen(8000, () => {
    console.log(`Server is listening on port ${PORT}`)
});