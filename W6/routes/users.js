var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "王柏堯"
    }, {
        id: 2,
        username: "陳思樺"
    }, {
        id: 3,
        username: "曾昱文"
    }]);
});

module.exports = router;