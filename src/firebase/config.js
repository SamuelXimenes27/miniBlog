import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDOw2RznMbIbNctm7M44JhvHnydbbX0wb8",
    authDomain: "miniblogreact-e2ce5.firebaseapp.com",
    projectId: "miniblogreact-e2ce5",
    storageBucket: "miniblogreact-e2ce5.appspot.com",
    messagingSenderId: "662930513490",
    appId: "1:662930513490:web:700e2bd1c0b0bf938e498b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };