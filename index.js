const express = require('express');
const database = require('./util/database');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log(`running on ${PORT}`);  
});

// Connect to the database
database.connect().then(() => console.log(`Connected to database`)
).catch(err => console.log(err.message));

