const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultsSchema = new Schema({
    class : { type: Schema.Types.ObjectId, ref: 'Classes'},
    term: {type: String, required: true},
    subject: { type: String, required: true},
    students: { type: Schema.Types.ObjectId, ref: 'student'},
    marks : {type: String, default:0 }
   
}, { timestamps: true });

module.exports = mongoose.model('results', resultsSchema);
