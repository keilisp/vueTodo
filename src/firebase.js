import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBad_Ly4mjRe0_xPeECLTbVy3leJhMeJWw",
	authDomain: "todos-db04e.firebaseapp.com",
	databaseURL: "https://todos-db04e.firebaseio.com",
	projectId: "todos-db04e",
	storageBucket: "todos-db04e.appspot.com",
	messagingSenderId: "639846777420",
	appId: "1:639846777420:web:014cd05e30e9cba9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots : true})

export default firestore