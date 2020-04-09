const mongoose = require('mongoose');
const { Schema } = mongoose;

const classSchema = new Schema({

    name : { type: String, required: true },
    classteacher: {type: String, required: true},
   // classteacher : { type: Schema.Types.ObjectId, ref: 'teachers'},

   students: [
        { type: Schema.Types.ObjectId, ref: 'Student'}
    ],
    subjects: [
        { type: Schema.Types.ObjectId, ref: 'Subject' }
    
    ]
    
}, { timestamps: true});

module.exports = mongoose.model('Classes', classSchema);