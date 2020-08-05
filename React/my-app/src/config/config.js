import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDLVPx-wm2c4cdj2YWKB9i6Cu_ayNm2wzA",
    authDomain: "my-app-5d8af.firebaseapp.com",
    databaseURL: "https://my-app-5d8af.firebaseio.com",
    projectId: "my-app-5d8af",
    storageBucket: "my-app-5d8af.appspot.com",
    messagingSenderId: "334095898452",
    appId: "1:334095898452:web:714c77527a28e8c1cfdac1",
    measurementId: "G-6ZHLY1G5K8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;