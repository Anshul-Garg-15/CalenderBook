const express = require('express');
const passport = require('passport');
const router = express.Router();
const userApi = require('../../../services/identityService');
const userApi1 = require('../../../services/kycService')

//get list of users
router.get('/info', userApi.list);

//route for register the user
router.post('/register', userApi1.register); 

//route for login the user
router.post('/login',userApi1.login);


module.exports = router;