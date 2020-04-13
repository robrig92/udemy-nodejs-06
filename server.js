const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

// HBS engine.
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'robErto paDillA'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});