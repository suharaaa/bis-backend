const Student = require('../models/student.model');
const Teacher = require('../models/teacher.model');
const Class = require('../models/class.model');

const getStatistics = async (req, res) => {

    try {

        const studentCount = await Student.find({}).count();
        const teacherCount = await Teacher.find({}).count();
        const classesCount = await Class.find({}).count();

        return res.status(200).json({
            success: true, data: { studentCount, teacherCount, classesCount }
        });
    
    } catch (err) {
        
        return res.status(500).json({
            success: false,
            error: err.message
        });

    }

};

module.exports = {
    getStatistics
};