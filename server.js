var express = require('express');
var bcrypt = require('bcryptjs');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ users: [{id: 'admin', password_hash: '$2a$08$xwqhrh5lSq80VINWFkLRI./Lo.BeZQiQmtSffW5Sq/1gRkrfR8kcy'}] })
  .write()

var app = express();
app.set('view engine', 'pug');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', function (req, res) {
  console.log(req.body);
  res.send({ authorized: false });
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: '屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/company', function (req, res) {
  res.render('company', { title: '会社概要|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/gallery', function (req, res) {
  res.render('gallery', { title: '製造設備と技術|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/contact', function (req, res) {
  res.render('contact', { title: 'お問い合わせ|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/quality', function (req, res) {
  res.render('quality', { title: '品質・環境|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/works', function (req, res) {
  res.render('works', { title: '事業紹介|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/aboutus', function (req, res) {
  res.render('aboutus', { title: '私たちの活動|屋外照明・屋内照明・LED照明・光学薄膜技術の横浜機工' });
});

app.get('/login', function (req, res) {
  res.render('login', { title: 'login' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
