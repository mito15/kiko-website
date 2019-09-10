var express = require('express');
var app = express();
app.set('view engine', 'pug')

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/index.html', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/company.html', function (req, res) {
  res.render('company', {});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
