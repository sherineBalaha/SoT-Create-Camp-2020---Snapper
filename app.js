var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.get('/', function (req, res) {
    res.render('nearest-kiosks.html');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});