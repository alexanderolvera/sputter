import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa15E2ecXfYHYMVEThoEmGBy9x4vFPpoo",
  authDomain: "sputter-d992d.firebaseapp.com",
  projectId: "sputter-d992d",
  storageBucket: "sputter-d992d.appspot.com",
  messagingSenderId: "894237838687",
  appId: "1:894237838687:web:19def9a249db39fd2d3aea",
  measurementId: "G-XGQH1D0WH7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()