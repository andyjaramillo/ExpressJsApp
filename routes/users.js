var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user', function(req, res, next) {
  res.render('form', { title: req.body.title , name: req.body.name, message: req.body.message });
});

module.exports = router;
