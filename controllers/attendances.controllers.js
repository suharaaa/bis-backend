const Attendance = require('../models/attendance.model');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const createAttendance = (req, res) => {

    const attendance = new Attendance(req.body);

    //const records = req.body.data.map.call(r => {
     //   r.teacher = Schema.Types.ObjectId(r.teacher);
     //   return r;
    //});

    //attendance.records = records;

    attendance.save().then(result => {
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
    Attendance.find({}).populate('records.teacher').then(result => {
            res.status(200).json({
                success:true,
                data: result
            });
        }).catch(err => {
            res.status(500).json({
                success: false,
                message: err.message
        });
    });
};

const viewAttendanceById = (req, res) => {
    Attendance.find(req.params.id)
    .populate('records.teacher').then(result => {
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

const updateAttendance = (req, res) => {
    const records = req.body.records.map(r => {
        r.teacher = Schema.Types.ObjectId(r.teacher);
        return r;
    });

    Attendance.findByIdAndUpdate(req.params.id, { records },{ new:true }).then(result => {
        res.status(200).json({
            success:true,
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
}

const deleteAttendance = (req, res) => {
    Attendance.findByIdAndDelete(req.params.id).then(result => {
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

module.exports = {
    createAttendance,
    viewAttendance,
    viewAttendanceById,
    updateAttendance,
    deleteAttendance
}