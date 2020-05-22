const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

    fullname : { type : String, required: true},
    email :{ type : String, required: true },
    grade : { type : String, required: true},
    password :{ type : String, required : true,  minlength : [6,'Password must be atleast 6 character long'] },
    reenter :{ type :String, required : true  },
    


    createdOn : { type : Date, default: new Date() },  //records time the task was created
    updatedOn : { type : Date, default : new Date()}   //records time the task runs


});




module.exports = mongoose.model('users', usersSchema);