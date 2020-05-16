const Class = require('../models/class.model');
const Teacher = require('../models/teacher.model');
const mongoose = require('mongoose');

const createNewClass= (req, res) => {

    if(!req.body.name){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Class name is undefined"

        }); 
    }

    //create new class
    const classroom = new Class(req.body);
    classroom.teacher = mongoose.Types.ObjectId(req.body.teacher);

     //save class to database
     classroom.save().then(result=> {

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


};




//to retrieve the classes that are created

const findClass = (req, res) =>{

    Class.find({}).populate('teacher').then(result => 
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




//find class by id
const findClassID = (req, res) =>{

    Class.findById(req.params.id).populate('teacher').then(result => 
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




//update class
const UpdateClass = (req, res) => {

    if( !req.body.name){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Class is undefined"

        });  //this checks client sde errors

    }


    Class.findByIdAndUpdate(req.params.id, {


        
        name : req.body.name,
        teacher : mongoose.Types.ObjectId(req.body.teacher)
        
        


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
};


//delete sub
const DeleteClass = (req, res) => {

   /* if( !req.body.name){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Class name is undefined"

        });  //this checks client sde errors

    }*/


    Class.findByIdAndDelete(req.params.id).then(result => 
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

//update student details

const UpdateStudent = (req, res) => {


    Class.findByIdAndUpdate(req.params.id, {
        $push: {
            students: mongoose.Types.ObjectId(req.body.student)
        }
    }, { new: true }).then(c => {

        Student.findByIdAndUpdate(req.body.student, {
            enrolledIn: mongoose.Types.ObjectId(c._id)
        }, { new: true }).then(data => res.status(200).json({ data }))
            .catch(err => res.status(500).json({ error: err.message }));

    }).catch(err => res.status(500).json({ error: err.message }));

}


//update subject details

const UpdateSub = (req, res) => {


    Class.findByIdAndUpdate(req.params.id, {
        $push: {
        subjects: mongoose.Types.ObjectId(req.body.subjects)
        }
    }, { new: true }).then(c => {

        Subject.findByIdAndUpdate(req.body.subject, {
            assignIn: mongoose.Types.ObjectId(c._id)
        }, { new: true }).then(data => res.status(200).json({ data }))
            .catch(err => res.status(500).json({ error: err.message }));

    }).catch(err => res.status(500).json({ error: err.message })); 

}




module.exports = {

createNewClass,
findClass,
findClassID,
UpdateClass,
DeleteClass,
UpdateStudent,
UpdateSub



}

