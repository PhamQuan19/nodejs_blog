const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


//HTTP logger
app.use(morgan('combined'));
//template engine
// app.engine('handlebars', handlebars());
// app.engine('handlebars', engine());
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname,'resources/views'));


// đường dẫn
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})
//127.0.0.1 - localhost
app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
  console.log(`Example app listening at http://localhost:${port}`);
})