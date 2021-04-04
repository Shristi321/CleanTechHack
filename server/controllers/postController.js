var {createDocument, readInfo} = require('../firestore');

// Display posts.
exports.get_posts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const info=await readInfo('event')
    console.log(info)
    res.json(info)
};

// create post.
exports.create_posts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    // var a = {
    //     name: req.body.data.name,
    //     description: req.body.data.description,
    //     location: req.body.data.location,
    //     points: req.body.data.points,
    //     startTime: req.body.data.startTime,
    //     endTime: req.body.data.endTime
    // };

    console.log(req.body)


    // await createDocument('post', a)

    res.send({status: 'success'});
};