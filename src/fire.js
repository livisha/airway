import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD-AJrsBOf85SpVELO_-AvQPZwklXL07LI",
    authDomain: "airport-review.firebaseapp.com",
    projectId: "airport-review",
    storageBucket: "airport-review.appspot.com",
    messagingSenderId: "1042958298241",
    appId: "1:1042958298241:web:c57aa9ffc0dc3d9cd1b180",
    measurementId: "G-0GQYG3JBN2"
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire;
