const Fees = require('../models/fees.model');

const createNewFee = (req, res) => {

    if( !req.body.grade){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Grade is undefined"

        }); 
    }


    const fees = new Fees(req.body);


     //save fees to database
     fees.save().then(result=> {

        res.status(200).json({

            success:true,
            data : result
        })
    }).catch(err => {
            
        res.status(500).json({
            success : false,
            message : err.message

        });      

    });


}




//to retrieve the fees that are created

const findFees = (req, res) =>{

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




//find fee by id
const findFeeID = (req, res) =>{

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



/*
//update fees
const UpdateFee = (req, res) => {

    if( !req.body.grade){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Grade is undefined"

        });  //this checks client sde errors

    }


    Fees.findByIdAndUpdate(req.params.id, {


        grade : req.body.grade,
        termfee : req.body.termfee,
        facilityfee : req.body.facilityfee,
        librarycharges : req.body.librarycharges,
        laboratorycharges : req.body.laboratorycharges,
        transportationfee : req.body.transportationfee,
        other : req.body.other,
        updatedOn : new Date()


    },).then(result => 
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
*/



const UpdateFee = (req, res) => {

    if( !req.body.grade){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Grade is undefined"

        });  //this checks client sde errors

    }


   
    Fees.findByIdAndUpdate(req.params.id, {


        
        grade : req.body.grade,
        termfee : req.body.termfee,
        facilityfee : req.body.facilityfee,
        librarycharges : req.body.librarycharges,
        laboratorycharges : req.body.laboratorycharges,
        transportationfee : req.body.transportationfee,
        other : req.body.other,
        updatedOn : new Date()
      
        


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









//delete fee
const DeleteFee = (req, res) => {

 /*   if( !req.body.grade){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Grade is undefined"

        });  //this checks client sde errors

    }*/


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

createNewFee,
findFees,
findFeeID,
UpdateFee,
DeleteFee


};
