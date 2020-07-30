
import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCe4GJooQWTcdpqL_RYjAmmOCNh-g7-I6M",
    authDomain: "weather-app-b9173.firebaseapp.com",
    databaseURL: "https://weather-app-b9173.firebaseio.com",
    projectId: "weather-app-b9173",
    storageBucket: "weather-app-b9173.appspot.com",
    messagingSenderId: "712224543668",
    appId: "1:712224543668:web:c72a7ef45451c675bbd8e1",
    measurementId: "G-DCDXQ3QHPQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;