const Student = require('../models/student.model');
const mongoose = require('mongoose');
const Classes = require('../models/class.model');

const enrollStudent = (req, res) => {
    if (!req.body.fname) {
        return res.status(400).json({
            success: false,
            message: "Name is undefined"
        });
    }

    if (!req.body.lname) {
        return res.status(400).json({
            success: false,
            message: "Surname is undefined"
        });
    }

    if (!req.body.address) {
        return res.status(400).json({
            success: false,
            message: "Address is undefined"
        });
    }

    //create student
    const student = new Student(req.body);
    student.class = mongoose.Types.ObjectId(req.body.class);

    //save to db
    student.save()
        .then(s => {
            Classes.findByIdAndUpdate(req.body.class, {
                $push: {
                    students: mongoose.Types.ObjectId(s._id)
                }
            }).then(result => {
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
        }).catch(err => {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
};

//get all students
const viewStudents = (req, res) => {

    Student.find({})
        .populate('class')
        .then(result => {

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

};

//get students by id
const viewStudentId = (req, res) => {
    Student.findById(req.params.id)
        .populate('class')
        .then(result => {
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
};

//update student details
const updateStudent = (req, res) => {

    if (!req.body.fname) {
        return res.status(400).json({
            success: false,
            message: "Name undefined"
        });
    }

    if (!req.body.lname) {
        return res.status(400).json({
            success: false,
            message: "Surname is undefined"
        });
    }

    if (!req.body.address) {
        return res.status(400).json({
            success: false,
            message: "Address is undefined"
        });
    }

    Student.findByIdAndUpdate(req.params.id, {
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        gender: req.body.gender,
        dob: req.body.dob,
        nation: req.body.nation,
        religion: req.body.religion,
        mail: req.body.mail,
        class: mongoose.Types.ObjectId(req.body.class),
        mname: req.body.mname,
        moccupation: req.body.moccupation,
        mworkp: req.body.mworkp,
        maddress: req.body.maddress,
        mphone: req.body.mphone,
        memail: req.body.memail,
        fname: req.body.fname,
        foccupation: req.body.foccupation,
        fworkp: req.body.fworkp,
        faddress: req.body.maddress,
        fphone: req.body.fphone,
        femail: req.body.femail

    }, { new: true }).then(s => {
        Classes.findOneAndUpdate({
            students: mongoose.Types.ObjectId(req.params.id)
        }, {
            $pullAll: {
                students: [mongoose.Types.ObjectId(req.params.id)]
            }
        }).then(r => {
            Classes.findByIdAndUpdate(req.body.class, {
                $push: {
                    students: mongoose.Types.ObjectId(s._id)
                }
            }).then(result => {
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
        }).catch(err => {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
};

//unenroll a student from the system
const deleteStudentById = (req, res) => {

    Student.findByIdAndDelete(req.params.id)
    .then(s => {
        Classes.findOneAndDelete({
            students: mongoose.Types.ObjectId(req.params.id)
        }, {
            $pullAll: {
                students: [mongoose.Types.ObjectId(req.params.id)]
            }
        }).then(result => {
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
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });

};

//generate the next admission number
const getNextAdmissionNumber = (req, res) => {

    const start = new Date();
    start.setMonth(0, 1);
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setMonth(11, 31);
    end.setHours(23, 59, 59, 999);

    Student.find({ createdAt: { $gt: start, $lt: end } }, 'admissionNumber')
        .sort('-createdAt').then(result => {

            let nextNum = result.length === 0 ? 1 : parseInt(result.shift().admissionNumber.slice(-4)) + 1;

            const formattedCount = "000".concat(nextNum).slice(-4);
            return res.status(200).json({
                success: true,
                data: `S${start.getFullYear().toString().slice(-2)}${formattedCount}`
            });

    }).catch(err => res.status(500).json({
        success: false,
        message: err.message
    }));

}

module.exports = {
    enrollStudent,
    viewStudents,
    viewStudentId,
    updateStudent,
    deleteStudentById,
    getNextAdmissionNumber
};