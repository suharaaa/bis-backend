const mongoose = require('mongoose');

const subjectsSchema = new mongoose.Schema({

    subjectname : { type : String, required: true},
    classname : { type : String, required: true },
    teachername : { type : String, required: true}
    

});

module.exports = mongoose.model('subject', subjectsSchema);