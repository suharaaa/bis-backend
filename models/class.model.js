const mongoose = require('mongoose');
const { Schema } = mongoose;
const classSchema = new Schema({

    classname : { type: String, required: true },
    classteachername : [{ type: Schema.Types.ObjectId, ref: 'Teacher'}],

    students: [
        { type: Schema.Types.ObjectId, ref: 'Student'}
    ]

    

    

}, { timestamps: true});

module.exports = mongoose.model('classes', classSchema);