const StdAttendance = require('../models/std-attendance.model');

const addStdAttendance = (req, res) => {       

    const stdattendance = new StdAttendance(req.body);
    
    stdattendance.save().then(result => {
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

const viewStdAttendances = (req, res) => {
    StdAttendance.find({}).then(result => {
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

const viewStdAttendanceById = (req, res) => {
    StdAttendance.findById(req.params.id).then(result => {
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

//update works but array is not working
const updateStdAttendanceById = (req, res) => {
    StdAttendance.findByIdAndUpdate(req.params.id,{
        classId:req.body.classId,
        count:req.body.count,
        records:[{
            sID:req.body.records.sId,
            sName:req.body.records.sName,
            status:req.body.records.status
        }] 
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

const deleteStdAttendanceById = (req, res) => {
    StdAttendance.findByIdAndDelete(req.params.id).then(result => {
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
    addStdAttendance,
    viewStdAttendances,
    viewStdAttendanceById,
    updateStdAttendanceById,
    deleteStdAttendanceById
}