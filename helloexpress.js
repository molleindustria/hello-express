//check README.md

//require the module express
var express = require('express');
//call the module to create an application
var app = express();

app.get('/', function (req, res) {
    res.send('Hello Express!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});