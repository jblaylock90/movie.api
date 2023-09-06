const express = require('express'),
    morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
    {
        title: 'Ford vs Ferrari'
    },
    {
        title: 'Fast and the Furious'
    },
    {
        title: '2 Fast 2 Furious'
    },
    {
        title: 'Tokyo Drift'
    }

];

 // GET requests

app.get('/', (rep, res) => {
    res.send('Welcome to myFlix!');
});
 
app.get('/movies', (req, res) => {
    res.json(topMovies);
 }); 

app.use(express.static("public"));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('App is listening on port 8080.');
});