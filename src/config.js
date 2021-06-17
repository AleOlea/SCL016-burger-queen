import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBaeu3UWOJio5wf_IYFlc1_f9idxHuUs3U",
    authDomain: "cloud-cafe-2ab60.firebaseapp.com",
    projectId: "cloud-cafe-2ab60",
    storageBucket: "cloud-cafe-2ab60.appspot.com",
    messagingSenderId: "799182589523",
    appId: "1:799182589523:web:9319338d452c6925a880a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;

