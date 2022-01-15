import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAivMJ0-MCEeSbCWSATXd2Ke9NznQMI8FE",
    authDomain: "photogallery-demo.firebaseapp.com",
    projectId: "photogallery-demo",
    storageBucket: "photogallery-demo.appspot.com",
    messagingSenderId: "854760921046",
    appId: "1:854760921046:web:3d228401e8631ed98ff677"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timeStamp };