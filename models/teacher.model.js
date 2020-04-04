const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({

    fname: { type: String, required: true},
    lname: { type: String, required: true},
    address: { type: String, required: true},
    gender: { type: String, required: true},
    nic: { type: String, required: true},
    dob: { type: Date, required: true}, 
    phone: { type: Number, required: true},
    mstatus: { type: String, required: true},
    mphone: { type: Number, required: true},
    religion: { type: String, required: true},
    mail: { type: String, required: true},
    nationality: { type: String, required: true},
    qul: { type: String, required: true},

    // class:{type: Schema.Types.ObjectId, ref:'classes'},

},  { timestamps: true });

module.exports = mongoose.model('teachers', teacherSchema);