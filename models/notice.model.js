const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true},
    content: { type: String, required: true},
    teachersOnly: { type: Boolean, default: false},
    publishedOn: { type: Date, default: new Date()},
    updatedOn: { type: Date, default: new Date()},
    expiresOn: { type: Date, default: new Date()},
    noOfViewers: {type: Number, default: 0}
});

module.exports = mongoose.model('notice', noticeSchema); //collection name & structure