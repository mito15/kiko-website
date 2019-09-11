var express = require('express');
var bcrypt = require('bcryptjs');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

var passport = require('passport');
app.use(passport.initialize());

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done){
  bcrypt.hash(req.body.password, 8, function (err, hash) {
    var password_hash = db.get('users')
      .find({ id: 'admin' })
      .value();
    if (password_hash) {
      bcrypt.compare(req.body.password, password_hash, function (err, r) {
        res.send({ authorized: r });
      });
    } else {
      res.send({ authorized: false });
    }
  });
    if (なんらかのエラー) {
        return done(エラー内容);
    }
    else if (失敗) {
        return done(null, false);
    }
    else if (成功) {
        return done(null, username);
    }
}));

var app = express();
app.set('view engine', 'pug')

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

db.defaults({ users: [{id: 'admin', password_hash: '$2a$08$xwqhrh5lSq80VINWFkLRI./Lo.BeZQiQmtSffW5Sq/1gRkrfR8kcy'}] })
  .write()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true });

app.post('/login',
    passport.authenticate('local'),
    function(req, res){
        // 認証成功するとここが実行される
    }
);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
