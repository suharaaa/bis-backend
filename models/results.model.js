const mongoose = require('mongoose');

const resultsSchema = new mongoose.Schema({
    grade: { type: String, required: true},
    term: {type: String, required: true},
    subject: { type: String, required: true},
    name : {type: String, required: true},
    marks : {type: String, default:0 }
   
});

module.exports = mongoose.model('results', resultsSchema);
