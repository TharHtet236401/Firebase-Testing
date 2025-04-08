import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs } from "firebase/firestore";  

const firebaseConfig = {
    apiKey: "AIzaSyDYrvwspMHB4dHPOP0uQpN_-jkiEVD7nqk",
    authDomain: "fir-testing-ca024.firebaseapp.com",
    projectId: "fir-testing-ca024",
    storageBucket: "fir-testing-ca024.firebasestorage.app",
    messagingSenderId: "601033842252",
    appId: "1:601033842252:web:0cbd43482607bc2e3f9ee9"
  };

 initializeApp(firebaseConfig);

 //initialize firestore
 const db = getFirestore();

//get collection
 const colRef = collection(db,'books');

 //get docs
 getDocs(colRef).then((snapshot)=>{
    let books = [];
    snapshot.forEach((doc)=>{
        books.push({
            ...doc.data(),
            id:doc.id
        })
    })
    console.log(books)
 })


 console.log('Firebase initialized');
