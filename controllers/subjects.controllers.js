const Subject = require('../models/subject.model');

const createNewSubject= (req, res) => {

    if(!req.body.subjectname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Subject name is undefined"

        }); 
    }


    const subject = new Subject(req.body);
    subject.assignIn = mongoose.Types.ObjectId(req.body.assignId);


     //save fees to database
     subject.save()
     .then(s => {
         Class.findByIdAndUpdate(req.body.assignIn, {
             $push: {
                 subjects: mongoose.Types.ObjectId(s._id)
             }
         }).then(c => res.status(200).json({ data: s }))
             .catch(err => res.status(500).json({ error: err.message }));
     })
     .catch(err => res.status(500).json({ error: err.message }));

}




//to retrieve the sub that are created

const findSubjects = (req, res) =>{

    Subject.find({}).populate('assignIn').then(result => 
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

    Subject.findById(req.params.id).populate('assignIn').then(result => 
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


    Subject.findByIdAndUpdate(req.params.id, {
        subjectname: req.body.subjectname,
        assignIn: mongoose.Types.ObjectId(req.body.assignIn),
    }, { new: true }).then(s => {

        Class.findOneAndUpdate({ subjects: mongoose.Types.ObjectId(req.params.id) }, {
            $pullAll: {
                subjects: [mongoose.Types.ObjectId(req.params.id)]
            }
        }).then(r => {

            Class.findByIdAndUpdate(req.body.assignIn, {
                $push: {
                    subjects: mongoose.Types.ObjectId(s._id)
                }
            }).then(c => res.status(200).json({ data: s }))
                .catch(err => res.status(500).json({ error: err.message }));

        }).catch(err => res.status(500).json({ error: err.message }));

    }).catch(err => res.status(500).json({ error: err.message }));
    
}

//delete sub
const DeleteSubject = (req, res) => {

    if( !req.body.subjectname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Subject name is undefined"

        });  //this checks client sde errors

    }


    Subject.findByIdAndDelete(req.params.id).then(result => 
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
