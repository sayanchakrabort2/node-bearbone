var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({ result: 'user page...' })
});

module.exports = router;
