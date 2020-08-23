var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static("css"));
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('log-in.html');
});
app.get('/home', function (req, res) {
    res.render('home.html');
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.post('/validateLogIn', function (req, res){
    validateLogIn(req.body, res);
});

app.listen(3000, function () {
    console.log('Snapper Hub listening on port 3000!');
});



function validateLogIn(params, res) {
    let username = params.username;
    let password = params.password;

    if (username === 'test.snapper.hub@testmail.com' && password === 'CreateCamp2020'){
        res.render('home.html');
    }
    else res.render('log-in.html');
}