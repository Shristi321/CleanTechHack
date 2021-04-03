const admin = require('firebase-admin');

var serviceAccount = require('../service-account-file.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://cleantech.firebaseio.com'
});

const db = admin.firestore();


const createDocument = async (collection, data) => {
    const docRef = db.collection(collection).doc(data.docname);
    await docRef.set(data);
} 


const getEvents = async (city) => {
    const docRef = db.collection('event');
    const snapshot = await docRef.where('location', '==', city).get();
    var data=[];
    snapshot.forEach(doc => {
        data.push(doc.data());
      });
    
      return data;

} 

module.exports = {createDocument, getEvents};
