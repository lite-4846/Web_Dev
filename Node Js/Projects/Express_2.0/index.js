const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')


app.listen(745, () => {
    console.log('Heya!! Welcome to my terrotary');
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home'})
})

app.get('/random', (req, res) => {
    const Rand = Math.floor(Math.random() * 50) + 1;
    res.render('random', { title: 'Random', rand: Rand})
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    res.render('subreddit', { ...data, title: subreddit })
})

