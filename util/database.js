const mongoose = require('mongoose');
const config = require('../config/database.json');

const username = process.env.DB_USERNAME || config.username;
const password = process.env.DB_PASSWORD || config.password;
const url = process.env.DB_URL || config.url;
const host = process.env.DB_HOST || config.host;

const connect = () => mongoose.connect(
    url.replace('<username>', username)
    .replace('<password>', password)
);

module.exports = {
    connect
}