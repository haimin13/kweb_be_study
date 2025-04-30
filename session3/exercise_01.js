const express = require("express");

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const { query } = req;
    queryString = Object.keys(query).map(k => `${k}: ${query[k]}`).join('\n');
    res.send(queryString);
});

app.post('/', (req, res) => {
    const { body } = req;
    bodyString = Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n');
    res.send(bodyString)
});

app.put('/', (req, res) => {
    const { body } = req;
    bodyString = Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n');
    res.send(bodyString)
});

app.delete('/', (req, res) => {
    const { body } = req;
    bodyString = Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n');
    res.send(bodyString)
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
