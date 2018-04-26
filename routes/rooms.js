var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('game', { title: 'Test' });
});

router.get('/:rid', function(req, res, next) {
    res.render('game', { title: 'Test', rid: req.params.rid });
});

module.exports = router;
