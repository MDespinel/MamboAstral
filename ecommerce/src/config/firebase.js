// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW6jng7XlSMqWoCIsGg4_oOcx3mNnFEbM",
  authDomain: "tienda-mamboastral.firebaseapp.com",
  projectId: "tienda-mamboastral",
  storageBucket: "tienda-mamboastral.appspot.com",
  messagingSenderId: "259269897176",
  appId: "1:259269897176:web:67fd6fe495eae1b57f60ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//productos.forEach((prod) => {
//    addDoc(collection(db, 'productos'), prod)
//    .then((elem) => console.log(`se agregó el producto id ${elem.id}`))
//    .catch((error) => console.log(error));
//});