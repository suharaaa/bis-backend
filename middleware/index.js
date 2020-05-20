const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const init = app => {

    app.use(bodyParser.json());
    app.use(cors());
    // app.use('/uploads', express.static('uploads'));

};

module.exports = init;