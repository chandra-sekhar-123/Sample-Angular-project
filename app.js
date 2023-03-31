var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello World!');
});

app.get('/hello', function (req, res) {
    res.send(400,{msg:'World!'});
    });

    
app.listen(3000, function () {
console.log('app.js listening to http://localhost:3000/');
});
