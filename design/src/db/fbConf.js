import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBsVbzqlViMg2pQTQGRiX2JG2naN-__4f4",
    authDomain: "lab-theory-assaignment.firebaseapp.com",
    databaseURL: "https://lab-theory-assaignment.firebaseio.com",
    projectId: "lab-theory-assaignment",
    storageBucket: "lab-theory-assaignment.appspot.com",
    messagingSenderId: "169501267870"
};
firebase.initializeApp(config);


export const database = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()