const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './app/views');

app.use(express.static('./dist'));

app.get('/', function(req, res) {
    res.render('index', { title: 'Welcome' });
});

app.listen(3000);
