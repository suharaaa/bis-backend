const attendancesRouter = require('./attendances.routes');
const classesRouter = require('./classes.routes');
const feesRouter = require('./fees.routes');
const noticesRouter = require('./notices.routes');
const resultsRouter = require('./results.routes');
const studentsRouter = require('./students.routes');
const teachersRouter = require('./teachers.routes');
const usersRouter = require('./users.routes');
const subjectsRouter = require('./subjects.routes');
const statisticsRouter = require('./statistics.routes');

const init = app => {

    app.use(attendancesRouter);
    app.use(classesRouter);
    app.use(feesRouter);
    app.use(noticesRouter);
    app.use(resultsRouter);
    app.use(studentsRouter);
    app.use(teachersRouter);
    app.use(usersRouter);
    app.use(subjectsRouter);
    app.use(statisticsRouter);
    
};

module.exports = init;