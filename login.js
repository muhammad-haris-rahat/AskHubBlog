
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCS51aepFIwIBS-wOlurW1zwm64wz8xigk",
  authDomain: "chatapp-a78ad.firebaseapp.com",
  projectId: "chatapp-a78ad",
  storageBucket: "chatapp-a78ad.appspot.com",
  messagingSenderId: "942227778001",
  appId: "1:942227778001:web:26accb91ee8f95aa6158f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider(); 
const loginbtn = document.querySelector(".login-button");

loginbtn.addEventListener("click",()=>{

  
  signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
   
    console.log(user);
    window.location.href = "./createblog.html";


  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });

})


