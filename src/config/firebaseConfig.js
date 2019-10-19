// Import what we need from Firebase
// Import the Firestore datbase
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// This is the default Firebase configuration
var firebaseConfig = {
    apiKey: `${process.env.FIREBASE_apiKey}`,
    authDomain: `${process.env.FIREBASE_authDomain}`,
    databaseURL: `${process.env.FIREBASE_databaseURL}`,
    projectId: `${process.env.FIREBASE_projectId}`,
    storageBucket: `${process.env.FIREBASE_storageBucket}`,
    messagingSenderId: `${process.env.FIREBASE_messagingSenderId}`,
    appId: `${process.env.FIREBASE_appId}`,
    measurementId: `${process.env.FIREBASE_measurementId}`
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;