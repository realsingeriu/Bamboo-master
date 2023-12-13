import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnSbxt5Bi48ICEEEbzYu2kcFtdSkm-Ey4",
  authDomain: "newsfeed-bae.firebaseapp.com",
  projectId: "newsfeed-bae",
  storageBucket: "newsfeed-bae.appspot.com",
  messagingSenderId: "702929635846",
  appId: "1:702929635846:web:d8b3542a9ab8c48d5b5187"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
