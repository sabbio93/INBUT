var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var path = require('path');
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


function pyAcc()
{
var util = require('util'),
    exec = require('child_process').exec,
    child;

child = exec('python acc.py', // command line argument directly in string
  function (error, stdout, stderr) {      // one easy function to capture data/errors
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
   		 }
	});
}

function pySpegni()
{
var util = require('util'),
    exec = require('child_process').exec,
    child;

child = exec('python spegni.py', // command line argument directly in string
  function (error, stdout, stderr) {      // one easy function to capture data/errors
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
   		 }
	});
}

app.get('/', function (request, response) {
    response.status(200);
    response.send("hi");
    response.end();
    });

app.get('/accendi', function (request, response) {
	response.status(200);
	pyAcc();
    response.send("acceso");
    response.end();
    });

app.get('/spegni', function (request, response) {
    response.status(200);
	pySpegni();
    response.send("spento");
    response.end();
    });

app.get('/stato', function (request, response) {
    response.status(200);
    response.send("ok");
    response.end();
    });

app.get('/blink', function (request, response) {
    response.status(200);
	blinkLed();
    response.send("ok");
    response.end();
    });

app.listen(appEnv.port);
console.log('server partito porta:'+appEnv.port);
