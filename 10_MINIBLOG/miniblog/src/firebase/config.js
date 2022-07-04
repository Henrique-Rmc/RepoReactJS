// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Importamos o FIreStore manualmente
import{getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq8MLC9XIp45t0rPp3OQzat7fMb-LzWEI",
  authDomain: "miniblogreact.firebaseapp.com",
  projectId: "miniblogreact",
  storageBucket: "miniblogreact.appspot.com",
  messagingSenderId: "310407992301",
  appId: "1:310407992301:web:e319ea525ced7c57c70de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inicializamos manualmente o BD da fireStore
const db = getFirestore(app)

export{ db }