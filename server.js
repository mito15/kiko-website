var express = require('express');
var app = express();
app.set('view engine', 'pug')

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: '屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/index.html', function (req, res) {
  res.render('index', { title: '屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/company.html', function (req, res) {
  res.render('company', { title: '会社概要|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/gallery.html', function (req, res) {
  res.render('gallery', { title: '製造設備と技術|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/contact.html', function (req, res) {
  res.render('contact', { title: 'お問い合わせ|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/quality.html', function (req, res) {
  res.render('quality', { title: '品質・環境|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/works.html', function (req, res) {
  res.render('works', { title: '事業紹介|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/aboutus.html', function (req, res) {
  res.render('aboutus', { title: '私たちの活動|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
