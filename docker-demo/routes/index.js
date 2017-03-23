var express = require('express');
var os = require('os');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Express', 
    platform: os.platform(),
    release: os.release()
  });
});

module.exports = router;
