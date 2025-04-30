const express = require('express');

const port = 3000;
const app = express();

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    else {
        result = 1;
        for (let i = number; i >= 2; i--) {
            result *= i;
        }
        return result;
    }
}

app.get('/factorial', (req, res) => {
    const { query } = req;
    number = query['number'];
    res.redirect(`/factorial/:${number}`);
});

app.get('/factorial/:number', (req, res) => {
    const number = req.params.number;
    const num = parseInt(number.substring(1));
    res.send(factorial(num));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));