const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fname: { type: String, required: true},
    lname: { type: String, required: true},
    address: { type: String, required: true},
    gender: { type: String, required: true},
    dob: { type: Date, required: true}, 
    nation: { type: String, required: true},
    religion: { type: String, required: true},
    mail: { type: String, required: true},

    mname: { type: String, required: true},
    moccupation: { type: String, required: true},
    mworkp: { type: Number, required: true},
    maddress: { type: String},
    mphone: { type: Number, required: true},
    memail: { type: String},

    faname: { type: String, required: true},
    foccupation: { type: String, required: true},
    fworkp: { type: Number, required: true},
    faddress: { type: String},
    fphone: { type: Number, required: true},
    femail: { type: String},

    createdOn: { type: Date, default: new Date},
    updatedOn: {type: Date, default: new Date()}
})

module.exports = mongoose.model('student', studentSchema)