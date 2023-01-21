const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

let comments = [
    {
        id: uuid(),
        username: 'luffy',
        comment: 'Kaizoku oni naruhotokoda'
    },
    {
        id: uuid(),
        username: 'zoro',
        comment: 'Huhhhh?'
    },
    {
        id: uuid(),
        username: 'nami',
        comment: 'Berry!!'
    },
    {
        id: uuid(),
        username: 'sanji',
        comment: 'Nami-swan, Robin-chwaan!'
    }
]

app.listen('5000', () => {
    console.log('On Port 5000!');
})

app.get('/comments', (req, res) => {
    res.render('Comments_2/home', {comments});
})

app.get('/comments/new', (req, res) => {
    res.render('Comments_2/new');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('Comments_2/show', { comment })
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('Comments_2/edit', {comment})
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = req.body.comment;
    const newComment = comments.find(c => c.id === id);
    newComment.comment = foundComment;
    res.redirect('/comments')
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()});
    // res.render('Comments_2/home', {comments})
    res.redirect('/comments')
})