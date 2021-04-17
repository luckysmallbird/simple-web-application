var express = require('express');
var get_control = require('../control/getctl');

var router = express.Router();

router.get('/:key' , get_control.getkey);

module.exports = router;
