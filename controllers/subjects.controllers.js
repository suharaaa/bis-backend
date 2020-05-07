const Subject = require('../models/subject.model');
const Classes = require('../models/class.model');
const Teacher = require('../models/teacher.model');
const mongoose = require('mongoose');

const createNewSubject= (req, res) => {

    if(!req.body.subjectname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Subject name is undefined"

        }); 
    }

    //create a new subject
    const subject = new Subject(req.body);
    subject.class = mongoose.Types.ObjectId(req.body.class);
    subject.teacher = mongoose.Types.ObjectId(req.body.teacher);
   
    //save to the database
    subject.save()
    .then(s => {
        Classes.findByIdAndUpdate(req.body.class, {
            $push: {
                subjects: mongoose.Types.ObjectId(s._id)
            }

        }).then(result=> {

        res.status(200).json({

            success:true,
            data : result
        });
    }).catch(err => {
            
        res.status(500).json({
            success : false,
            message : err.message

        });      

    });
}).catch(err => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});



/*teacher.save()
    .then(t => {
        Teacher.findByIdAndUpdate(req.body.teacher, {
            $push: {
                teachers: mongoose.Types.ObjectId(t._id)
            }

        }).then(result=> {

        res.status(200).json({

            success:true,
            data : result
        });
    }).catch(err => {
            
        res.status(500).json({
            success : false,
            message : err.message

        });      

    });
}).catch(err => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});*/

};





//to retrieve the sub that are created

const findSubjects = (req, res) =>{

    Subject.find({}).populate('class').populate('teacher').then(result => 
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




//find sub by id
const findSubjectID = (req, res) =>{

    Subject.findById(req.params.id).populate('class').populate('teacher').then(result => 
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




//update subject details
const UpdateSubject = (req, res) => {

    if( !req.body.subjectname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Subject is undefined"

        });  //this checks client sde errors

    }


   
    Subject.findByIdAndUpdate(req.params.id, {


        
        subjectname : req.body.subjectname,
        class:mongoose.Types.ObjectId(req.body.class) ,
        //teachername : req.body.teachername,
       teacher : mongoose.Types.ObjectId(req.body.teacher)
    }, { new: true }).then(s => {
        Classes.findOneAndUpdate({
            subjects: mongoose.Types.ObjectId(req.params.id)
        }, {
            $pullAll: {
                subjects: [mongoose.Types.ObjectId(req.params.id)]
            }
        }).then(r => {
            Classes.findByIdAndUpdate(req.body.class, {
                $push: {
                    subjects: mongoose.Types.ObjectId(s._id)
                }
        


    }).then(result => 
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
}).catch(err => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});
}).catch(err => {
res.status(500).json({
    success: false,
    message: err.message
});
});

};

//delete subject from system and the array in class

const DeleteSubject = (req, res) => {

    /*if( !req.body.subjectname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Subject is undefined"

        });  //this checks client sde errors

    }*/


   
    Subject.findByIdAndDelete(req.params.id)

 
        
   .then(s => {
        
            
            Classes.findOneAndUpdate({
                subjects:mongoose.Types.ObjectId(req.params.id)
            
        }, {
            $pullAll: {
                subjects: [mongoose.Types.ObjectId(req.params.id)]
            }
        
        


    }).then(result => 
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
}).catch(err => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});
   


};




   





  
    

module.exports = {

createNewSubject,
findSubjects,
findSubjectID,
UpdateSubject,
DeleteSubject


};
