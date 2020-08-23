var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static("css"));
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('log-in.html');
});
app.get('/log-in', function (req, res) {
    res.render('log-in.html');
});
app.get('/home', function (req, res) {
    res.render('home.html');
});
app.get('/pay-online', function (req, res) {
    res.render('Pay-Online.html');
});
app.get('/map', function (req, res) {
    res.render('nearest-kiosks.html');
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.post('/validateLogIn', function (req, res){
    validateLogIn(req.body, res);
});

const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
    console.log(`Snapper Hub listening on port ${PORT}`);
});




function validateLogIn(params, res) {
    let username = params.username;
    let password = params.password;

    if (username === 'test.snapper.hub@testmail.com' && password === 'CreateCamp2020'){
        res.render('nearest-kiosks.html');
    }
    else res.render('log-in.html');
}