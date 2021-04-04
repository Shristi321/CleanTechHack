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
    console.log('Data')
    console.log(data);
    console.log(collection);
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

module.exports = {createDocument, readInfo, login, logout, signUp};
