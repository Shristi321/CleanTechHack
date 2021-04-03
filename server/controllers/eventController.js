var User = require('../models/user');
var Event = require('../models/Event');
var admin  = require('../app');
var {createDocument} = require('../firestore');



// Display User information.
exports.get_events = (req, res) => {
    res.send('Not implemented');
};

// Handle User information update on POST.
exports.create_events = async (req, res) => {

    var a = {
    name: req.body.title,
    description: req.body.description,
    location: req.body.city,
    points: req.body.points,
    docname: req.body.title
    };

    await createDocument('event', a)

    res.send({status: 'success'});
};

// Display User activity history on GET.
exports.edit_events = (req, res) => {
    res.send('Not implemented');
};

// Display User posts on GET.
exports.delete_events = (req, res) => {
    res.send('Not implemented');
};