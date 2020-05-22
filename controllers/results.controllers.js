const Results = require('../models/results.model');
const Students = require('../models/student.model');
const Classes = require('../models/class.model');
const mongoose = require('mongoose');

const createNewResult = (req, res) => {

   
    if( !req.body.marks){  //body has the tasks content, if marks arent defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Result is undefined"

        }); 
    }

    //save results to database
    const result = new Results(req.body);
    result.students = mongoose.Types.ObjectId(req.body.students);
    result.class = mongoose.Types.ObjectId(req.body.class);



     result.save()
         .then(s => {
             Results.findByIdAndUpdate(req.body.class, {
                 $push: {
                     results: mongoose.Types.ObjectId(result._id)
                 }
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
         }).catch(err => {
             res.status(500).json({
                 success: false,
                 message: err.message
             });
         });
 };


//to retrieve the results that are created
const viewResults = (req, res) => {

Results.find({}).populate('students').populate('class')
        
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

//find result by id
const findResultID = (req, res) =>{

    Results.findById(req.params.id).populate('students').populate('class').then(result => 
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


const UpdateResults= (req, res) => {

    if( !req.body.marks){  //body has the tasks content, if marks arent defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Result is undefined"

        });  //this checks client sde errors

    }


    Results.findByIdAndUpdate(req.params.id, {
        
        class : mongoose.Types.ObjectId(req.body.class),
        term : req.body.term,
        subject: req.body.subject,
        students : mongoose.Types.ObjectId(req.body.students),
        marks: req.body.marks


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


//delete Result
const DeleteResults = (req, res) => {

 
Results.findByIdAndDelete(req.params.id).then(result => 
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

createNewResult,
viewResults,
UpdateResults,
DeleteResults,
findResultID
};
