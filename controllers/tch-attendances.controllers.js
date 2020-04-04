const TchAttendance = require('../models/tch-attendance.model');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const createTchAttendance = (req, res) => {

    const tchAttendance = new TchAttendance();

    const records = req.body.records.map(r => {
        r.teacher = mongoose.Types.ObjectId(r.teacher);
        return r;
    });

    tchAttendance.records = records;

    tchAttendance.save().then(result => {
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

const viewTchAttendance = (req, res) => {
    TchAttendance.find({}).populate('records.teacher').then(result => {
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

const viewTchAttendanceById = (req, res) => {
    TchAttendance.find(req.params.id)
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

const updateTchAttendance = (req, res) => {
    const records = req.body.records.map(r => {
        r.teacher = mongoose.Types.ObjectId(r.teacher);
        return r;
    });

    TchAttendance.findByIdAndUpdate(req.params.id, { records },{ new:true }).then(result => {
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

const deleteTchAttendance = (req, res) => {
    TchAttendance.findByIdAndDelete(req.params.id).then(result => {
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
    createTchAttendance,
    viewTchAttendance,
    viewTchAttendanceById,
    updateTchAttendance,
    deleteTchAttendance
}