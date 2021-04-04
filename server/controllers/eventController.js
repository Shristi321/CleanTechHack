var User = require('../models/user');
var Event = require('../models/Event');
var admin  = require('../app');
var {createDocument, readInfo} = require('../firestore');
// const fs = require('fs');
// // const AWS = require('aws-sdk');
// const {ID, key} = require('../keys');
// const BUCKET_NAME = 'post-photos-cleantech';

// const s3 = new AWS.S3({
//     accessKeyId: ID,
//     secretAccessKey: key
// });

// const uploadFile = (fileName) => {
//     // Read content from the file
//     const fileContent = fs.readFileSync(fileName);

//     // Setting up S3 upload parameters
//     const params = {
//         Bucket: BUCKET_NAME,
//         Key: 'cat.jpg', // File name you want to save as in S3
//         Body: fileContent
//     };

//     // Uploading files to the bucket
//     s3.upload(params, function(err, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(`File uploaded successfully. ${data.Location}`);
//     });
// };

// uploadFile(cat.jpg)



// Display User information.
exports.get_events = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const info=await readInfo('event')
    console.log(info)
    res.json(info)
};

// Handle User information update on POST.
exports.create_events = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    var a = {
        name: req.body.data.name,
        description: req.body.data.description,
        location: req.body.data.location,
        points: req.body.data.points,
        startTime: req.body.data.startTime,
        endTime: req.body.data.endTime
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