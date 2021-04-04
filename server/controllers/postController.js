var {createDocument, readInfo, updatePoints} = require('../firestore');

// Display posts.
exports.get_posts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const info=await readInfo('posts')
    console.log(info)
    res.json(info)
};

// create post.
exports.create_posts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    // formats date of post
    const nowDate = new Date()
    const month = nowDate.getMonth() + 1
    const day = nowDate.getDate()
    const year = nowDate.getFullYear()
    const hour = nowDate.getHours()
    var minute = nowDate.getMinutes()
    if (minute < 10) {
        minute = '0' + minute
    }
    
    const date = hour + ":" + minute + ' ' + month + '/' + day + '/' + year

    var a = {
        name: req.body.data.activityType,
        additionalInfo: req.body.data.additionalInfo,
        description: req.body.data.description,
        eventpicture: req.body.data.event_picture,
        location: 'Oakland',
        date: date,
        // userID: 
        // userProfile picture

    };

    console.log(req.body)

    const b = {
        name: req.body.data.activityType,
        additionalInfo: req.body.data.additionalInfo,
        userID: '123'
    }


    await createDocument('posts', a)

    await updatePoints('users',b)

    res.send({status: 'success'});
};