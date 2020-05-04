const Teacher = require('../models/teacher.model')

const addTeacher = (req, res) => {
    if (!req.body.fname) {
        return res.status(400).json({
            success: false,
            message: "Name is undefined"
        });
    }

    if (!req.body.lname) {
        return res.status(400).json({
            success: false,
            message: "Surname is undefined"
        });
    }

    
    
    //creating teacher
    const teacher = new Teacher(req.body);

    //save to the database
    teacher.save().then(result => {
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

//getting teacher list
const viewTeacher = (req, res) =>{

    Teacher.find({}).then(result => 
        {
            res.status(200).json({

                success : true,
                data : result   
            });
        }).catch(err => {
            
            res.status(500).json({

                success : false,
                message : err.message

            }); 
   
        });

};

//finding

const viewTeacherId = (req, res) => {
    Teacher.findById(req.params.id)
        
        .then(result => {
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


// updataing
const updateTeacher = (req, res) => {

    if (!req.body.fname) {
        return res.status(400).json({
            success: false,
            message: "Name undefined"
        });
    }

    if (!req.body.lname) {
        return res.status(400).json({
            success: false,
            message: "Surname is undefined"
        });
    }

    Teacher.findByIdAndUpdate(req.params.id, {
        tid: req.body.tid,
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        gender: req.body.gender,
        nic: req.body.nic,
        dob: req.body.dob,
        phone: req.body.phone,
        mstatus: req.body.mstatus,
        mphone: req.body.mphone,
        religion: req.body.religion,
        mail: req.body.mail,
        nationality: req.body.nationality,
        qul: req.body.qul,
       
    
    }).then(result => {
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

//deleting
const deleteTeacher = (req, res) => {
    
        Teacher.findByIdAndDelete(req.params.id).then(result => 
        {
            res.status(200).json({

                success : true,
                data : result


        });
    }).catch(err => {
            
        res.status(500).json({
            success : false,
            message : err.message

        });        
   
    });


};

//getting next
const getNextTid = (req, res) => {
    
    const start = new Date();
    start.setMonth(0, 1);
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setMonth(11, 31);
    end.setHours(23, 59, 59, 999);

    Teacher.aggregate([
        {
            $match: {
                createdAt: { $gt: start, $lt: end }
            }
        }, {
            $group: {
                _id: null,
                count: {
                    $sum: 1
                }
            }
        }
    ]).then(result => {
        const formattedCount = "000".concat(result[0].count).slice(-4);
        return res.status(200).json({
            success: true,
            data: `T${start.getFullYear().toString().slice(-2)}${formattedCount}`
        });
    }).catch(err => res.status(500).json({
        success: false,
        message: err.message
    }));

};

// const showHistory = (req, res) => {

//     Teacher.find({ history: true})
        
//         .then(result => {

//             res.status(200).json({
//                 success: true,
//                 data: result
//             });

//         }).catch(err => {
//             res.status(500).json({
//                 success: false,
//                 message: err.message
//             });
//         });

// };


// const moveTeacher = (req, res) => {
//     Teacher.findByIdAndUpdate( req.params.id, {
//         history: true
//     }, {new: true})
//     .then(result => {
//         res.status(200).json({
//             success: true,
//             data: result
//         });
//     }).catch(err => {
//         res.status(500).json({
//             success: false,
//             message: err.message
//         });
    
    
//     });
// };


module.exports = {
    addTeacher,
    viewTeacher,
    updateTeacher,
    deleteTeacher,
    viewTeacherId,
    getNextTid,
    // showHistory,
    // moveTeacher
};