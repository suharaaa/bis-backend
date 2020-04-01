const Subjects = require('../models/subjects.model');

const createNewSubject= (req, res) => {

    if(!req.body.subjectname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Subject name is undefined"

        }); 
    }


    const subject = new Subjects(req.body);


     //save fees to database
     subject.save().then(result=> {

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




//to retrieve the sub that are created

const findSubjects = (req, res) =>{

    Subjects.find({}).then(result => 
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

    Subjects.findById(req.params.id).then(result => 
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




//update sub
const UpdateSubject = (req, res) => {

    if( !req.body.subjectname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Subject is undefined"

        });  //this checks client sde errors

    }


    Subjects.findByIdAndUpdate(req.params.id, {


        subjectname : req.body.subjectname,
        class : req.body.class,
        teachername : req.body.teachername
        
        


    }, {new: true}).then(result => 
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
const DeleteSubject = (req, res) => {

    if( !req.body.subjectname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Subject name is undefined"

        });  //this checks client sde errors

    }


    Subjects.findByIdAndDelete(req.params.id).then(result => 
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

createNewSubject,
findSubjects,
findSubjectID,
UpdateSubject,
DeleteSubject


}
