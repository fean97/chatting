// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqnN8zRSvrMDxZyJPibH1Vi8UiTr3pYIc",
  authDomain: "chatting-6ccc5.firebaseapp.com",
  projectId: "chatting-6ccc5",
  storageBucket: "chatting-6ccc5.appspot.com",
  messagingSenderId: "590854910190",
  appId: "1:590854910190:web:7e0472c3e1711c842883ff",
  measurementId: "G-C0XWHKM941",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

export { db, analytics };
