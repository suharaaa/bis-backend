const bodyParser = require('body-parser');
const cors = require('cors');

const init = app => {

    app.use(bodyParser.json());
    app.use(cors());

};

module.exports = init;