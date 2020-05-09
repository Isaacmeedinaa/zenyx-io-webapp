var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('public/index.html', {
      root: "./"
  })
});

router.get('/index', function (req, res, next) {
  res.sendFile('public/index.html', {
      root: "./"
  })
});


router.get('/about', function (req, res, next) {
  res.sendFile('public/about.html', {
      root: "./"
  })
});

router.get('/contact', function (req, res, next) {
  res.sendFile('public/contact.html', {
      root: "./"
  })
});

module.exports = router;
