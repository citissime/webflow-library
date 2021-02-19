import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCH0oCxavFpkfSTHzr3EY-pNlEI4WlmhK0",
    authDomain: "webflow-penpals.firebaseapp.com",
    projectId: "webflow-penpals",
    storageBucket: "webflow-penpals.appspot.com",
    messagingSenderId: "652456805354",
    appId: "1:652456805354:web:df1c6b275e9af3ead9a893",
    measurementId: "G-7H7YLET9NT"
};

firebase.initializeApp(firebaseConfig);

export { firebase };