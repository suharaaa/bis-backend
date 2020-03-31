const TeacherAttendance = require('../models/teachAttendance.model');

const addAttendance = (req, res) => {       
    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Name is undefined"
        });
    }

    const newAttendance = new Attendance(req.body);

    newAttendance.save().then(result => {
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

const viewAttendance = (req, res) => {
    Attendance.findById(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(400).json({
            success: false,
            message: err.message
        });
    })
};

const viewAttendanceById = (req, res) => {
    Attendance.findById(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(400).json({
            success: false,
            message: err.message
        });
    });
};

const updateAttendanceById = (req, res) => {
    if(!req.body.title) {
        return res.status(400).json({
            success: false,
            message: "Title is undefined"
        });
    }

    if(!req.body.content) {
        return res.status(400).json({
            success: false,
            message: "Message is undefined"
        });
    }

    Attendance.findByIdAndUpdate(req.params.id,{
        status: req.body.status,
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(503).json({
            success: false,
            message: err.message
        });
    });
};

const deleteAttSheetById = (req, res) => {
    Attendance.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(504).json({
            success: false,
            message: err.message
        });
    });
};

const updatePresentCountById = (req, res) => {
    Attendance.findByIdAndUpdate(req.params.id, {
        presentedTeachersCount: req.body.presentedTeachersCount
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(504).json({
            success: false,
            message: err.message
        });
    });
};

module.exports = {
    addAttendance,
    viewAttendance,
    viewAttendanceById,
    updateAttendanceById,
    deleteAttSheetById,
    updatePresentCountById
}