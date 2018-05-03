var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});

router.post('/game', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    name: req.body.name,
    join_type : req.body.join_type,
    room : req.body.room,
  });
});

module.exports = router;
