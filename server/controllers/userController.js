var User = require('../models/user');
var UserPost = require('../models/userPost');
var {login, signUp, logout, createDocument} = require('../firestore');



// User SignUp
exports.user_signup = async (req, res) => {
    try{
        await signUp(req.body.email, req.body.password);
        var data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            email: req.body.email,
            name: req.body.firstName
        }

        await createDocument('users', data);
        res.status(200).send('Account created');
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
};

// User Login
exports.user_login = async (req, res) => {
    try{
        await login(req.body.email, req.body.password);
        res.send('Login sucessful');
    }catch(e){
        res.status(400).send(e);
    }
};

// User Logout
exports.user_logout = async (req, res) => {
    try{
        await logout();
        res.send('Logout sucessful');
    }catch(e){
        res.status(400).send(e);
    }
};

// Display User information.
exports.user_information = (req, res) => {
    res.send('Not implemented');
};

// Handle User information update on POST.
exports.user_update_post = (req, res) => {
    res.send('Not implemented');
};

// Display User activity history on GET.
exports.user_activity_history_get = (req, res) => {
    res.send('Not implemented');
};

// Display User posts on GET.
exports.user_posts_history_get = (req, res) => {
    res.send('Not implemented');
};