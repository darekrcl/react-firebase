import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCF-LRF3sH83a8Q8i_d1dUupqHkZo_tOjo",
    authDomain: "todos-4d027.firebaseapp.com",
    databaseURL: "https://todos-4d027.firebaseio.com",
    projectId: "todos-4d027",
    storageBucket: "todos-4d027.appspot.com",
    messagingSenderId: "597712020020",
    appId: "1:597712020020:web:3b1fb0da6974ed64476061",
    measurementId: "G-XWDTD1EE6X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase