const newRouter=require('./news');
const siteRouter=require('./site');


function route(app){
    // đường dẫn
    // app.get('/', (req, res) => {
    //     // res.send('Hello World!')
    //     res.render('home');
    // });
    
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });
    app.use('/news', newRouter);


    // app.get('/search', (req, res) => {
    //     res.render('Search');
    // });
    app.use('/', siteRouter);

    
    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });
  
}

module.exports = route;