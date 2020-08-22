var express = require('express');
var app = express();

app.use(express.static("css"));
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('log-in.html');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});