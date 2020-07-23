
import firebase from 'firebase/app'
import 'firebase/firestore'


export var firebaseConfig = {
  apiKey: "AIzaSyBmdymkniynaEVF_a_SxCUGEUcJUqBTbPc",
  authDomain: "web-app-8f4d1.firebaseapp.com",
  databaseURL: "https://web-app-8f4d1.firebaseio.com",
  projectId: "web-app-8f4d1",
  storageBucket: "web-app-8f4d1.appspot.com",
  messagingSenderId: "821482055108",
  appId: "1:821482055108:web:6c7ca52e7b8f98cb67f091",
  measurementId: "G-CPY2FE1L0C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;