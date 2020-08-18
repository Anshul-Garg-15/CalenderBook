const express = require('express');
const passport = require('passport');
const router = express.Router();
const eventApi = require('../../../services/calenderService');


//route for create event of user with their ID
router.post('/:id/create_event',eventApi.createEvent);

//route for showing all events of user
router.get('/:id/all_event',eventApi.list);

module.exports = router;