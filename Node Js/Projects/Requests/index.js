const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.listen(4000, () => {
    console.log('Listening to Port 4000');
})

app.get('/meat', (req, res) => {
    res.send("Hello world");
})

app.post('/meat', (req, res) => {
    console.log(req.body)
    const {type, qty} = req.body;
    res.send(`Here is your ${qty}kg ${type}`)
})