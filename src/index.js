const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({extended:true}));
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//template engine
// app.engine('handlebars', handlebars());
// app.engine('handlebars', engine());
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname,'resources/views'));


//Routes init: khoi tạo tuyến đường
// route();

// đường dẫn
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('Search');
});

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
});

//127.0.0.1 - localhost
app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
  console.log(`Example app listening at http://localhost:${port}`);
})