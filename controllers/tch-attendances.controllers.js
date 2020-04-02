const TchAttendance = require('../models/tch-attendance.model');

const addTchAttendance = (req, res) => {       

    const tchattendance = new TchAttendance(req.body);

    tchattendance.save().then(result => {
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

const viewTchAttendances = (req, res) => {
    TchAttendance.find({}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    })
};

const viewTchAttendanceById = (req, res) => {
    TchAttendance.findById(req.params.id).then(result => {
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
//update works but records is not working
const updateTchAttendanceById = (req, res) => {
    TchAttendance.findByIdAndUpdate(req.params.id,{
        count: req.body.count,
        records:[{
            tchId:req.body.tchId,
            tchName:req.body.tchName,
            status:req.body.status}]
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

const deleteTchAttendanceById = (req, res) => {
    TchAttendance.findByIdAndDelete(req.params.id).then(result => {
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
    addTchAttendance,
    viewTchAttendances,
    viewTchAttendanceById,
    updateTchAttendanceById,
    deleteTchAttendanceById
}