const express = require('express');

const port = 3000;
const app = express();

app.set('views', `${__dirname}`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('exercise_04.pug'));

app.post('/login', (req, res) => {
    const { body } = req;
    delete body.introduction;
    resString = Object.keys(body).map(k => `${k}: ${body[k]}`).join('<br>');
    res.send(resString);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));