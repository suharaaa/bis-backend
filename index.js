const express = require('express');

const app = express();

const PORT=process.env.PORT || 3000;
app.listen(PORT, err => {
    if(err){
        return console.error(err.message);
    }
    console.log(`running on ${PORT}`);
    
})