const express = require('express');
const app = express();
const path = require('path');

// app.use((req, res) => {
//     console.log('Holy Crap!')
    // res.send('Gotcha!')
//     res.send('<h3>Thats noice!</h3>')
// })

app.listen(2000, () => {
    console.log('Heya!');
})

app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.send('<h2>okaerinasai</h2>')
    // res.render('home.ejs'); both are correct
    // res.render('home');
})

app.get('/r/:sub/:postId' , (req, res) => {
    const { sub, postId} = req.params;
    res.send(`So you are looking for this id:${postId} to view ${sub}`)
})

app.get('/r/:sub', (req, res) => {
    const { sub } = req.params;
    res.render('sub', {sub});
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 40 + 1);
    res.render('random', {rand: num});
})

app.get('/cats', (req, res) => {
    // console.log('Gotta Pet one really!');
    // res.send('Meowww!')
    const cats = ['mizu', 'ace', 'robin']
    res.render('cats', {cats})
})

app.post('/cats', (req, res) => {
    // console.log('Gotta Pet one really!');
    res.send('This is post reQuest ')
})

app.get('/dogs', (req, res) => {
    // console.log('Gotta Pet one really!');
    res.send('Woof!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q){
        res.send('Nothing found when nothing Search')
    }
    res.send(`NT : ${q}`)
})

app.get('*', (req, res) => {
    res.send('Wassup!')
})

