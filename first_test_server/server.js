// var http = require('http');
// var url = require('url');
//
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);
var express = require('express');
var app = express();
var url = require('url'); //get url parameters
var fs = require('fs'); //create, modify and delete file
var formidable = require('formidable'); //upload files
var form = new formidable.IncomingForm();
var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventHandler = function () {
  console.log('I hear a scream!');
}
//Assign the event handler to an event:
eventEmitter.on('click', myEventHandler);
//Fire the 'scream' event:
eventEmitter.emit('click');


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/url', function(req, res){
  res.send(req.url);
});

app.get('/lol', function(req, res){
  res.send('lol');
  eventEmitter.on('event', () => {
    console.log('an event occurred!');
  });
});

app.get('/parseUrl', function(req, res){
  var q = url.parse(req.url, true);
  console.log(q);
  res.send(req.get('host') + ' et ' + q.path + ' et ' + q.search);
});

app.get('/eventTest', function (req, res){
  console.log(events);
  console.log(eventEmitter);
  var rs = fs.createReadStream('./demofile.txt');
  rs.on('open', function () {
    console.log('The file is open');
  });
});

app.get('/fichier', function(req, res){
  fs.readFile('test.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

app.get('/createFile', function(req, res){
  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.send('Saved');
  });
});

app.get('/createFile2', function(req, res){
  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log(file);
    console.log('Saved!');
    res.send('Saved');
  });
});

app.get('/createFile3', function(req, res){
  fs.writeFile('mynewfile3.txt', 'Mon texte, pas plus!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.send('Saved');
  });
});

app.get('/eraseFile', function(req, res){
  var q = url.parse(req.url, true).query;
  if (q.mdp === 'lolilol') {
    fs.unlink(q.file, function (err) {
      if (err) throw err;
      console.log('File deleted!');
      res.send('erase file : ' + q.file);
    });
  } else {
    res.send('Bad password or bad request');
  }
});

app.get('/upload', function(req, res){
  // test upload not finished
  fs.readFile('upload.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    if (files !== {}) {
      console.log('LOL');
    }
    form.parse(req, function (err, fields, files) {
      console.log(files);
      console.log(fields);
      console.log(err);
      // var oldpath = files.filetoupload.path;
      // var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
      // fs.rename(oldpath, newpath, function (err) {
      //   if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      // });
    });
  });
});

app.get('/date', function(req, res){
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
});

app.get('*', function(req, res){
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

app.listen(3000);
