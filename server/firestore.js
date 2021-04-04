const admin = require('firebase-admin');

var serviceAccount = require('../service-account-file.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://cleantech.firebaseio.com'
});

const db = admin.firestore();


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

module.exports = {createDocument, readInfo};
