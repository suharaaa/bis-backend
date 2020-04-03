const mongoose = require('mongoose');
const { Schema } = mongoose;
const subjectsSchema = new Schema({

    subjectname : { type : String, required: true},
    classname : { type: Schema.Types.ObjectId, ref: 'Class'},
    teachername :{ type: Schema.Types.ObjectId, ref: 'Teacher'}
 

},{ timestamps: true });

module.exports = mongoose.model('subject', subjectsSchema);