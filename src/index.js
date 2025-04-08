import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDYrvwspMHB4dHPOP0uQpN_-jkiEVD7nqk",
    authDomain: "fir-testing-ca024.firebaseapp.com",
    projectId: "fir-testing-ca024",
    storageBucket: "fir-testing-ca024.firebasestorage.app",
    messagingSenderId: "601033842252",
    appId: "1:601033842252:web:0cbd43482607bc2e3f9ee9"
  };

 initializeApp(firebaseConfig);

 console.log('Firebase initialized');
