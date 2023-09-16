const Course =require('../models/Course');


class SiteController {
    //[GET]/
    index(req, res) {
        //lay du lieu tu database
        Course.find({}) .then(courses => res.json(courses)) .catch(err => res.status(400).json({ error: 'ERROR' }));
        // res.render('home');
    }

    //[GET]/serch
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
