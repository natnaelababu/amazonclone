// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDnF94aq8iB21Ks3W1qIvs4-5a8dcpQTh0",
	authDomain: "clone-5e0e6.firebaseapp.com",
	projectId: "clone-5e0e6",
	storageBucket: "clone-5e0e6.appspot.com",
	messagingSenderId: "207451021166",
	appId: "1:207451021166:web:d61937c1720a7d779f2b7f",
	measurementId: "G-1F9NFXLPXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
