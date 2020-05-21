const router = require('express').Router();
const noticeController = require('../controllers/notices.controllers');

// define routes here
router.post('/notices', noticeController.createNotice);
router.get('/notices', noticeController.viewNotices);
router.get('/notices/public', noticeController.viewPublicNotices);
router.get('/notices/:id', noticeController.viewNoticeById);
router.put('/notices/:id', noticeController.updateNoticeById);
router.delete('/notices/:id', noticeController.deleteNoticeById);

module.exports = router;