var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ArchiViz_LuFipe');
});

module.exports = router;
