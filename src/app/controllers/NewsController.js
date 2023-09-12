class NewsController{
    //[GET]/news
    index(req, res){
        res.render('news');
    }

    //[GET]/serch
    search(req, res){
        res.send("new detail!!")
    }
}

module.exports =new NewsController; 