var express = require('express');
var router = express.Router();

const AuthController = require('./AuthController');
router.post('/authenticate',AuthController.authenticate );

module.exports = router;