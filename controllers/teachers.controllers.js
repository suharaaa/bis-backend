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
    const teachers = new Teacher(req.body);

    //save to the database
    teachers.save().then(result => {
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
}

//finding
const findTeacher = (req, res) =>{

    Fees.find({}).then(result => 
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


const findTeacherByID = (req, res) =>{

    Fees.findById(req.params.id).then(result => 
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

    Task.findByIdAndUpdate(req.params.id, {
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
const DeleteTeacher = (req, res) => {

    if( !req.body.grade){  

        return res.status(400).json({

                success : false,
                message : "Grade is undefined"

        });  //this checks client sde errors

    }


    Fees.findByIdAndDelete(req.params.id).then(result => 
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


module.exports = {
    addTeacher,
    findTeacher,
    findTeacherByID,
    updateTeacher,
    DeleteTeacher
};