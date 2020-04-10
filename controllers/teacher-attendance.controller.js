const moment = require('moment');
const mongoose = require('mongoose');

const Teacher = require('../models/teacher.model');
const TeacherAttendance = require('../models/teacher-attendance.model');

/**
 * Client error handler
 * @param {*} res Response object
 * @param {*} error Error message to be returned
 */
const handleBadRequest = (res, error) => res.status(400)
    .json({
        success: false, error
    });

/**
 * Success scenario handler
 * @param {*} res Response object
 * @param {*} data Data object
 */
const handleSuccessResponse = (res, data) => res.status(200)
    .json({
        success: true, data
    });

/**
 * Handle server side errors
 * @param {*} res Response object
 * @param {*} error Error message
 */
const handleError = (res, error) => res.status(500)
    .json({
        success: false, error
    });

const getTeacherAttendanceByDate = async (req, res) => {

    try {

        const attendanceRecords = await TeacherAttendance
            .find({ date: { $eq: req.query.date }})
            .populate('teacher');
    
        const teachers = await Teacher.find({});

        const result = [];

        for(const t of teachers) {

            for(const a of attendanceRecords) {
                
                if (mongoose.Types.ObjectId(a.teacher._id).equals(mongoose.Types.ObjectId(t._id))) {
                    result.push(a);
                } else {
                    const teacher = await Teacher.findById(t._id);
                    result.push({
                        _id: t._id,
                        teacher,
                        status: 'absent',
                        date: req.params.date
                    });
                }

            }

        }

        return handleSuccessResponse(res, result);

    } catch (err) {

        console.log(JSON.stringify(err));

        return handleError(res, err.message);

    }

};

const createNewTeacherAttendance = async (req, res) => {
    /**
     * Validate attendance
     * Only allow attendance records from the current date
     */

    if (moment(req.body.date, 'DD-MM-YYYY').isAfter(moment(), 'date')) {
        return handleBadRequest(res, 'invalid date');
    }

    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
        return handleBadRequest(res, 'teacher not found for provided id');
    }
    
    const attendace = new TeacherAttendance(req.body);
    attendace.teacher = mongoose.Types.ObjectId(req.params.id);

    attendace.save()
        .then(data => handleSuccessResponse(res, data))
        .catch(err => handleError(res, err.message));

};

const updateTeacherAttendance = async (req, res) => {

    const attendance = await TeacherAttendance.findOne({
        date: req.query.date,
        teacher: mongoose.Types.ObjectId(req.body.teacher)
    });

    if (!attendance) {

        const attendace = new TeacherAttendance(req.body);
        attendace.teacher = mongoose.Types.ObjectId(req.params.id);
        return attendace.save()
            .then(data => handleSuccessResponse(res, data))
            .catch(err => handleError(res, err.message));
        
    } else {

        TeacherAttendance.findOneAndUpdate({
            date: req.query.date,
            teacher: mongoose.Types.ObjectId(req.params.id)
        }, {
            status: req.body.status
        }, { new: true }).then(data => handleSuccessResponse(res, data))
            .catch(err => handleError(res, err.message));

    }

};

const deleteTeacherAttendance = (req, res) => {

    TeacherAttendance.findByIdAndDelete(req.params.id)
        .then(result => handleSuccessResponse(res, result))
        .catch(err => handleError(res, err.message));
    
};

module.exports = {
    createNewTeacherAttendance,
    getTeacherAttendanceByDate,
    updateTeacherAttendance,
    deleteTeacherAttendance
};