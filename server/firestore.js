const admin = require('firebase-admin');
var firebase = require("firebase/app");
require("firebase/auth");
var serviceAccount = require('../service-account-file.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://cleantech.firebaseio.com'
});

const db = admin.firestore();

var firebaseConfig = {
    apiKey: "AIzaSyA-GwSvYvt07TfsZKUPPdu6jXalrWKIcPY",
    authDomain: "cleantechhack.firebaseapp.com",
    databaseURL: "https://cleantech.firebaseio.com",
    projectId: "cleantechhack",
    storageBucket: "cleantechhack.appspot.com",
    messagingSenderId: "848742411674",
    appId: "1:848742411674:web:7f938ecbaf78bd9ab55e23"
  };

firebase.initializeApp(firebaseConfig);

var signUp = async (email,password) => {
    const userData = await firebase.auth().createUserWithEmailAndPassword(email, password);
    var user = userData.user;
}


var login = async (email, password) => {
        const userData = await firebase.auth().signInWithEmailAndPassword(email, password);
        var user = userData.user;
}



var logout = async () => {
        const userData = await firebase.auth().signOut();
}

var createDocument = async (collection, data) => {
    const docRef = db.collection(collection).doc(data.name);
    await docRef.set(data);
} 

var readInfo = async (collection) => {
    const snapshot = await db.collection(collection).where('location', '==', 'Oakland').get();
    if (snapshot.empty) {
    console.log('No matching documents.');
    return;
    }  
    
    var data = []
    snapshot.forEach(doc => {
    const item = doc.data()
    data.push(item)
    });

    return data
}

var updatePoints = async (collection, data) => {
    const snapshot = await db.collection(collection).where('userID', '==', data.userID).get();

    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    } 

    var points;
    var id;

    snapshot.forEach(doc => {
        const item = doc.data()
        points= item.points
        id = doc.id
    });

    
    var pointsToAdd;

    if (data.name === 'Picking up trash') {
        pointsToAdd = 10
    } else if (data.name === 'Recycling') {
        pointsToAdd = 20
    } else if (data.name === 'Composting') {
        pointsToAdd = 40
    } else if (data.additionalInfo === 'Omnivore') {
        pointsToAdd = 25
    } else if (data.additionalInfo === 'Vegeterian') {
        pointsToAdd = 75
    } else if (data.additionalInfo === 'Carpooling') {
        pointsToAdd = 10
    } else if (data.additionalInfo === 'Walking') {
        pointsToAdd = 50
    } else if (data.additionalInfo === 'Biking') {
        pointsToAdd = 20
    } else if (data.additionalInfo === 'Public Transit') {
        pointsToAdd = 20
    } else {
        pointsToAdd = 75
    }

    pointsToAdd = parseInt(points[points.length-1],10) + parseInt(pointsToAdd,10)
    points.push(`${pointsToAdd}`)
    console.log(points, id)

    const month = nowDate.getMonth() + 1
    const day = nowDate.getDate()
    const year = nowDate.getFullYear()

    const date =month + '/' + day + '/' + year

    await db.collection(collection).doc(id).update({points: points, activeDate: date})
} 

module.exports = {createDocument, readInfo, updatePoints, login, logout, signUp};
