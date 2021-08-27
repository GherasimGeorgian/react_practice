import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDL5J2w-NEcVIUajeag2a6uAqKvYimZs1M",
    authDomain: "reactmarket-222e8.firebaseapp.com",
    databaseURL: "https://reactmarket-222e8.firebaseio.com",
    projectId: "reactmarket-222e8",
    storageBucket: "reactmarket-222e8.appspot.com",
    messagingSenderId: "334936747042",
    appId: "1:334936747042:web:99b42f4fe1bfb9e45d2e7b",
    measurementId: "G-Z4SLFMN2FM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true, merge: true});

  export default firebase;