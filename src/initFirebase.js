import firebase from 'firebase'

var config = {
    apiKey:"AIzaSyBLPa3eCKS5xkq1ZDvAl_cUEvE67x0RQSk",
    authDomain:"todo-5754b.firebaseapp.com",
    databaseURL:"todo-5754b.firebaseapp.com",
    projectId:"todo-5754b"
};

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

const db = firebase.firestore();

export default db