const Student = require('../models/student.model');
const Teacher = require('../models/teacher.model');
const Class = require('../models/class.model');
const Subject = require('../models/subject.model');


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

const getStudentEnrollmentCountsByYear = async (req, res) => {

    try {

        const start = new Date();
        const end = new Date();
        
        start.setMonth(0, 1);
        start.setHours(0, 0, 0, 0);

        end.setMonth(11, 31);
        end.setHours(23, 59, 59, 999);

        const thisYearMale = await Student.find({
            createdAt: {
                $gt: start, $lt: end
            },
            gender: 'male'
        }).count();

        const thisYearFemale = await Student.find({
            createdAt: {
                $gt: start, $lt: end
            },
            gender: 'female'
        }).count();

        start.setFullYear(start.getFullYear() - 1);
        end.setFullYear(end.getFullYear() - 1);

        const lastYearMale = await Student.find({
            createdAt: {
                $gt: start, $lt: end
            },
            gender: 'male'
        }).count();

        const lastYearFemale = await Student.find({
            createdAt: {
                $gt: start, $lt: end
            },
            gender: 'female'
        }).count();

        return res.status(200).json({
            success: true, data: { thisYearMale, thisYearFemale, lastYearMale, lastYearFemale }
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }

};



const getTeachersBySubjects = async (req, res) => {

    try {

        const start = new Date();
        const end = new Date();
        
        start.setMonth(0, 1);
        start.setHours(0, 0, 0, 0);

        end.setMonth(11, 31);
        end.setHours(23, 59, 59, 999);

        const thisYearEnglish = await Class.find({
            createdAt: {
                $gt: start, $lt: end
            },
        [students]: 'Grade 01'
        }).populate('student').count();

        const thisYearMaths = await Class.find({
            createdAt: {
                $gt: start, $lt: end
            },
            [students]: 'Grade 02'
        }).populate('student').count();

        start.setFullYear(start.getFullYear() - 1);
        end.setFullYear(end.getFullYear() - 1);

        const lastYearEnglish = await Class.find({
            createdAt: {
                $gt: start, $lt: end
            },
            [students]: 'Grade 01'
        }).populate('student').count();

        const lastYearMaths = await Class.find({
            createdAt: {
                $gt: start, $lt: end
            },
            [students]: 'Grade 02'
        }).populate('student').count();

       

        return res.status(200).json({
            success: true, data: { thisYearEnglish, thisYearMaths, lastYearEnglish,lastYearMaths }
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }

};
module.exports = {
    getStatistics,
    getStudentEnrollmentCountsByYear,
    getTeachersBySubjects
};