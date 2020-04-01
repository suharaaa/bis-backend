const attendanceRouter = require('./attendance.routes');
const classesRouter = require('./classes.routes');
const feesRouter = require('./fees.routes');
const noticesRouter = require('./notices.routes');
const resultsRouter = require('./results.routes');
const studentsRouter = require('./students.routes');
const teachersRouter = require('./teachers.routes');
const usersRouter = require('./users.routes');
const subjectsRouter = require('./subjects.routes');

const init = app => {

    app.use(attendanceRouter);
    app.use(classesRouter);
    app.use(feesRouter);
    app.use(noticesRouter);
    app.use(resultsRouter);
    app.use(studentsRouter);
    app.use(teachersRouter);
    app.use(usersRouter);
    app.use(subjectsRouter);

};

module.exports = init;