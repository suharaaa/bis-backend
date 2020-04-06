const mongoose = require('mongoose');
const { Schema } = mongoose;
const subjectsSchema = new Schema({

    subjectname : { type : String, required: true},
   // classname : { type: Schema.Types.ObjectId, ref: 'Class'},
    //teachername :{ type: Schema.Types.ObjectId, ref: 'Teacher'}
    classname : { type : String, required : true},
    teachername : { type : String, required: true}

},{ timestamps: true });

module.exports = mongoose.model('subject', subjectsSchema);