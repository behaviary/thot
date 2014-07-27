var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'thot.' });
});

router.get('/live', function(req, res) {
	res.render('live', { title: 'live'})
})


router.get('/upload', function(req, res) {
	res.render('upload', {title: 'coming soon!'})
})
module.exports = router;
