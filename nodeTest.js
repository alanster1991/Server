var express = require('express');
var app = express();

var names = ['song', 'becky', 'bill', 'joe', 'fong', 'alan'];
var ages = ['26' , '25', '24', '23', '22', '21', '20'];
var hobby = ['basketball' , 'baseball', 'hockey', 'badminton', 'tennis', 'soccer'];
app.set('view engine', 'ejs'); 
app.use(express.static('public'));

app.get('/test1', function(req, res) {
  res.send(names);
});

app.get('/', function(req, res){
  res.render('test1');
});

app.get('/test2', function(req, res) {
  res.send(ages);
});

app.get('/test3', function(req, res) {
  res.send(hobby);
});
app.listen(8000);
