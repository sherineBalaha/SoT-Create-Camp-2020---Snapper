




var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('Pay-Online.html');
});

// app.get('/', function (req, res) {
//     //res.send('Testing Pay Online Branch!');
//     res.render("Pay-Online.html")
// });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});