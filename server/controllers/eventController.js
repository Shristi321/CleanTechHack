var User = require('../models/user');
var Event = require('../models/Event');
var admin  = require('../app');
var {createDocument} = require('../firestore');
const fs = require('fs');
const AWS = require('aws-sdk');
const {ID, key} = require('../keys');
const BUCKET_NAME = 'post-photos-cleantech';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: key
});

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'cat.jpg', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};



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