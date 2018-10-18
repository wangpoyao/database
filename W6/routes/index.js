var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '403110629', name: '王柏堯' });
});

module.exports = router;