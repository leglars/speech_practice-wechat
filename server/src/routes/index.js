'use strict';

const express = require('express');
const router = express.Router();

router.get('/', require('./welcome'));
// router.get('/login', require('./login'));
// router.get('/user', require('./user'));
// router.all('/tunnel', require('./tunnel'));
router.get('/hello', require('./helloworld'));
router.get('/get-user-data', require('./getUserData'));



module.exports = router;