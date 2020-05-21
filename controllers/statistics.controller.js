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







const getStudentsByClass = async (req, res) => {

    try {

        

        const thisYear01 = await Student.find({
        
           
           class : '5eb2c75b3c579544f47c47ab'
          
          
           
        }).populate({path:'class'}) .count();
        
        const thisYear02 = await Student.find({
            
            
            class: '5eb2c7673c579544f47c47ac'
           
        }) .populate({path:'class'}).count();
        
        const thisYear03 = await Student.find({
        
            
            class: '5ebd6fc97b06ed23e8ad6afe'
            
        }).populate({path:'class'}) .count();

        const thisYear04 = await Student.find({
            
           
           
        
           class : '5ebd6fd97b06ed23e8ad6aff'
        
          
          
           
        }).populate({path:'class'}) .count();

        const thisYear05 = await Student.find({
            
           
           class : '5ebd6fe07b06ed23e8ad6b00'
           
          
          
           
        }).populate({path:'class'}) .count();
        

       

        return res.status(200).json({
            success: true, data: { thisYear01, thisYear02,thisYear03, thisYear04,thisYear05}
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
    getStudentsByClass
};