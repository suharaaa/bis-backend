const Notice = require('../models/notice.model');

const createNotice = (req, res) => {

    if(!req.body.title) {
        return res.status(400).json({
            success: false,
            message: "Title is undefined"
        });
    }

    if(!req.body.content) {
        return res.status(400).json({
            success: false,
            message: "Message is undefined"
        });
    }

    if(!req.body.expiresOn) {
        return res.status(400).json({
            success: false,
            message: "Expiry Date is undefined"
        });
    }

    const notice = new Notice(req.body);

    notice.save().then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
};

const updateNoticeById = (req, res) => {

    if(!req.body.title) {
        return res.status(400).json({
            success: false,
            message: "Title is undefined"
        });
    }

    if(!req.body.content) {
        return res.status(400).json({
            success: false,
            message: "Message is undefined"
        });
    }

    if(!req.body.expiresOn) {
        return res.status(400).json({
            success: false,
            message: "Expiry Date is undefined"
        });
    }
    
    Notice.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        content: req.body.content,
        teachersOnly: req.body.teachersOnly,
        expiresOn: req.body.expiresOn,
        updatedOn: new Date()
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(503).json({
            success: false,
            message: err.message
        });
    });
};

const viewNotices = (req, res) => {
    Notice.find({}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};

const viewPublicNotices = (req, res) => {
    Notice.find({teachersOnly:false}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};

const viewNoticeById = (req, res) => {
    Notice.findById(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(502).json({
            success: false,
            message: err.message
        });
    });
};

const deleteNoticeById = (req, res) => {
    Notice.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(504).json({
            success: false,
            message: err.message
        });
    });
};

module.exports = {
    createNotice,
    viewNotices,
    viewPublicNotices,
    viewNoticeById,
    updateNoticeById,
    deleteNoticeById,
}
