var express = require('express');
var set_control = require('../control/setctl');

var router = express.Router();

router.post('/:key' , set_control.setkey);

module.exports = router;
