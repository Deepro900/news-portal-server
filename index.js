const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const news = require('./news.json');


app.use(cors());


//const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send(' News api running');
})


app.get('/news-categories', (req, res) => {
    res.send(categories);
})
app.get('/news/:id', (req, res) => {

    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
    console.log(req.params.id);

});

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    if (id === '08') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);

    }
});

app.listen(port, () => {
    console.log('News server running on port', port);
})