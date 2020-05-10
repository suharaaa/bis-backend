const mongoose = require('mongoose');
const { Schema } = mongoose;
const subjectsSchema = new Schema({

    subjectname : { type : String, required: true},
   class : { type: Schema.Types.ObjectId, ref: 'Classes'},
    teacher :{ type: Schema.Types.ObjectId, ref: 'teachers'}
   // classname : { type : String, required : true},
    //teachername : { type : String, required: true}

},{ timestamps: true });

module.exports = mongoose.model('subject', subjectsSchema);