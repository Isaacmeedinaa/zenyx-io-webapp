var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('public/index.html', {
      root: "./"
  })
});

router.get('/index.html', function (req, res, next) {
  res.sendFile('public/index.html', {
      root: "./"
  })
});


router.get('/about.html', function (req, res, next) {
  res.sendFile('public/about.html', {
      root: "./"
  })
});

router.get('/contact.html', function (req, res, next) {
  res.sendFile('public/contact.html', {
      root: "./"
  })
});

router.get('/services.html', function (req, res, next) {
  res.sendFile('public/services.html', {
    root: "./"
  })
})

module.exports = router;
