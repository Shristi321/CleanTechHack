var express = require('express');
var router = express.Router();

var eventController = require('../controllers/eventController');

// GET request for all events
router.get('/event/location', eventController.get_events);

// POSR request for creating an event
router.post('/event', eventController.create_events);

// PUT request to update an event
router.put('/event/:id', eventController.edit_events);

// Delete request to delete an event
router.delete('/event/:id', eventController.delete_events);

module.exports = router;