const Users = require('../models/users.model');

const createNewUser = (req, res) => {

    if( !req.body.fullname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Full name is undefined"

        }); 
    }


    const users = new Users(req.body);


     //save Users to database
     users.save().then(result=> {

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




//to retrieve the users that are created

const findUsers = (req, res) =>{

    Users.find({}).then(result => 
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




//find user by id
const findUserID = (req, res) =>{

    Users.findById(req.params.id).then(result => 
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




//update users
const UpdateUser = (req, res) => {

    if( !req.body.fullname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Full name is undefined"

        });  //this checks client sde errors

    }


    Users.findByIdAndUpdate(req.params.id, {

        fullname: req.body.fullname,
        email : req.body.email,
        grade : req.body.grade,
        password : req.body.password,
        reenter : req.body.reenter,
        updatedOn : new Date()


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


//delete user
const DeleteUser = (req, res) => {

    if( !req.body.fullname){  //body has the tasks content, if name isnt defined in body, it gives an error

        return res.status(400).json({

                success : false,
                message : "Full name is undefined"

        });  //this checks client sde errors

    }


    Users.findByIdAndDelete(req.params.id).then(result => 
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

createNewUser,
findUsers,
findUserID,
UpdateUser,
DeleteUser


};
