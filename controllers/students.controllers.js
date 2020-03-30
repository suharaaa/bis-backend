const student = require('../models/student.model')

const enrollStudent = (req, res) => {
    //create student
    const student = new Student(req.body);

    //save to db
    student.save().then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
}

module.exports = {
    enrollStudent
};