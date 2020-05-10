const mongoose = require('mongoose');

const feesSchema = new mongoose.Schema({

    grade : { type : String, required: true},
    termfee :{ type :Number, required: true },
    facilityfee : { type : Number, required: true},
    librarycharges :{ type :Number },
    laboratorycharges :{ type :Number  },
    transportationfee :{ type :Number },
    other :{ type :Number },
    tot : { type :Number },


    craetedOn : { type : Date, default: new Date() },  //records time the task was created
    updatedOn : { type : Date, default : new Date()}   //records time the task runs


});

module.exports = mongoose.model('fees', feesSchema);