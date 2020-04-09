const Student = require('../models/student.model')

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

//get all students
const viewStudents = (req, res) => {

    Student.find({}).then(result => {

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
        mname: req.body.mname,
        moccupation: req.body.moccupation,
        mworkp: req.body.mworkp,
        mphone: req.body.mphone,
        memail: req.body.memail,
        fname: req.body.fname,
        foccupation: req.body.foccupation,
        fworkp: req.body.fworkp,
        fphone: req.body.fphone,
        femail: req.body.femail
    
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

};

//unenroll a student from the system
const deleteStudentById = (req, res) => {

    Student.findByIdAndDelete(req.params.id).then(result => {
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

const getNextAdmissionNumber = (req, res) => {
    
    const start = new Date();
    start.setMonth(0, 1);
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setMonth(11, 31);
    end.setHours(23, 59, 59, 999);

    Student.aggregate([
        {
            $match: {
                createdAt: { $gt: start, $lt: end }
            }
        }, {
            $group: {
                _id: null,
                count: {
                    $sum: 1
                }
            }
        }
    ]).then(result => {
        const formattedCount = "000".concat(++result[0].count).slice(-4);
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
    updateStudent,
    deleteStudentById,
    getNextAdmissionNumber
};