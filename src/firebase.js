import firebase from 'firebase';
 
  
 const firebaseConfig = {
    apiKey: "AIzaSyCO0gnH89wSJ0Iu1jEHwfKKMZ94mOh9y7I",
    authDomain: "farm-5cf39.firebaseapp.com",
    projectId: "farm-5cf39",
    storageBucket: "farm-5cf39.appspot.com",
    messagingSenderId: "37718126492",
    appId: "1:37718126492:web:00e85183e5634c1dbf6259"
  };
 
  firebase.initializeApp(firebaseConfig);

  var auth = firebase.auth();

  export default auth;
