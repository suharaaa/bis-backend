const Results = require('../models/results.model');

const createNewResult = (req, res) => {

    if( !req.body.marks){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Grade is undefined"

        }); 
    }


    const results = new Results(req.body);


     //save results to database
     results.save().then(result=> {

        res.status(200).json({

            success:true,
            data : results
        })
        
    }).catch(err => {
            
        res.status(500).json({
            success : false,
            message : err.message

        });      

    });


}

//to retrieve the results that are created

const viewResults = (req, res) =>{

    Results.find({}).then(result => 
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



//update Result
const UpdateResults = (req, res) => {

    if( !req.body.marks){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "mark is undefined"

        });  //this checks client sde errors

    }
    Results.findByIdAndUpdate(req.params.id, {

        marks : req.body.marks,
        
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


//delete Result
const DeleteResults = (req, res) => {

  /*  if( !req.body.marks){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "mark is undefined"

        });  //this checks client sde errors

    }
*/

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

createNewResult ,
viewResults,
UpdateResults,
DeleteResults,
};
