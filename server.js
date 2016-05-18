//  OpenShift sample Node application
var express = require('express');
// var fs      = require('fs');
var app     = express();
var ejs     = require('ejs');

app.engine('html', require('ejs').renderFile);

var port = 8080;
var ip = '0.0.0.0';


// Environment Variables

// Variables


//
// Functions
// 
app.get('/', function (req, res) {
    res.render('index.html');
});


// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!' + err.stack);
});

app.listen(port, ip);
console.log('Server running on ' + ip + ':' + port);
