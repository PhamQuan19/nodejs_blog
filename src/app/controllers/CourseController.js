const Course =require('../models/Course');
const {mongooseToObject} =require('../../util/mongoose');

class CourseController {
    //[GET]/course/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then(course =>{
            res.render('courses/show', {course:mongooseToObject(course)});
        })

        .catch(next);

       // res.send('Course Detail'+req.params.slug);
    }
    //[GET]/course/create
    create(req, res, next) {
        res.render('courses/create');
       // res.send('Course Detail'+req.params.slug);
    }

    //[POST]/course/store
    store(req, res, next) {
        const formData =req.body;
        req.body.image=`https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
       const course =new Course(formData);
        course.save()
        .then(()=> res.redirect('/'))
        .catch(error =>{
            
        });
    }

    //[GET]/course/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit',{
            course: mongooseToObject(course)
        }))
        .catch(next);
        // res.render('courses/edit');
    }
    //[PUT]/course/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() =>res.redirect('/me/stored/courses'))
        .catch(next);
    }

     //[Delete]/course/:id
     destroy(req, res, next) {
       Course.deleteOne({_id: req.params.id})
       .then(()=> res.redirect('back'))
       .catch(next);
    }

}

module.exports = new CourseController();
