var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var jsonParser = require('body-parser').json();
var session = require('express-session');
var app = express();

app.use (session ({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60*24 }
}))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

 
app.post('/signIn', jsonParser, (req,res)=> 
{
    var {username, password} = req.body;
    if(username === 'nextsmarty' && password === '123'
    || username === 'tungst' && password === '1234')
{
        req.session.username = username;
        return res.send('DANG_NHAP_THANH_CONG');
}
        res.send('DANG_NHAP_THAT_BAI');
});

app.post('/getInfo', (req,res)=>
{
    console.log('ccc---->',res.data)
    if(req.session.username){
        return res.send(req.session.username);
    }
    res.send('CHUA_DANG_NHAP');
})

app.post('/logout', (req,res)=>
{
    req.session.username = undefined;
    res.send('DA_DANG_XUAT');
})


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3003, function () {
    console.log('Server listening on port 3003!');
});