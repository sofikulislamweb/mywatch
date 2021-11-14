import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}
export default initializeFirebase;