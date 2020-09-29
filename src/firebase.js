import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyB8Hxiwheh9xcPaE3pyiUX3cnp2Gd_PthY",
  authDomain: "travel-guru-johirdipok.firebaseapp.com",
  databaseURL: "https://travel-guru-johirdipok.firebaseio.com",
  projectId: "travel-guru-johirdipok",
  storageBucket: "travel-guru-johirdipok.appspot.com",
  messagingSenderId: "599280946773",
  appId: "1:599280946773:web:71984bd830eb72b596cedc"
  };


// const firebaseDataBase = firebase.database();
firebase.initializeApp(firebaseConfig);
export {firebase}
