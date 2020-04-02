const StdAttendance = require('../models/std-attendance.model');

const createStdAttendance = (req, res) => {

    const stdAttendance = new StdAttendance({
       date: req.body.date,
       class: mongoose.Types.ObjectId(req.params.id) 
    });

    const records = req.body.records.map(r => {
        r.student = mongoose.Types.ObjectId(r.student);
    });

    stdAttendance.records = records;

    stdAttendance.save().then(result => {
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

const viewStdAttendance = (req, res) => {
    StdAttendance.find({class: mongoose.Types.ObjectId(req.params.id)})
        .populate('class')
        .populate('records.student').then(result => {
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

const updateStdAttendance = (req, res) => {
    const records = req.body.records.map(r => {
        r.student = mongoose.Types.ObjectId(r.student);
        return r;
    });

    StdAttendance.findByIdAndUpdate(req.params.id, { records },{ new:true }).then(result => {
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

const deleteStdAttendance = (req, res) => {
    StdAttendance.findByIdAndDelete(req.params.id).then(result => {
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
    createStdAttendance,
    viewStdAttendance,
    updateStdAttendance,
    deleteStdAttendance
}