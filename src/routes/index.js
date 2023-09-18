const newRouter = require('./news');
const cousesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', cousesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
