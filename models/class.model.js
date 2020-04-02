const mongoose = require('mongoose');
const { Schema } = mongoose;

const classSchema = new Schema({

    name : { type: String, required: true },
    classteacher : { type: Schema.Types.ObjectId, ref: 'Teacher'},

    students: [
        { type: Schema.Types.ObjectId, ref: 'Student'}
    ]
    
}, { timestamps: true});

module.exports = mongoose.model('Classes', classSchema);