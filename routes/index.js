var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', function(req, res, next) {
  console.log("made it")
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()})
  res.redirect('/')
  //res.render('index', { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
