function SignIn(){
    let id = document.getElementById('id').value;
    let ps = document.getElementById('password').value;

}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCysqIcGQWnEvBt-F1kHlYJCxLc0ImQjk0",
  authDomain: "gotlife-fd3fa.firebaseapp.com",
  databaseURL: "https://gotlife-fd3fa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gotlife-fd3fa",
  storageBucket: "gotlife-fd3fa.appspot.com",
  messagingSenderId: "959226188674",
  appId: "1:959226188674:web:e79c14b64eb9568829359b",
  measurementId: "G-8WHX4K6MK8"
};

async function Push(){
  let response = await fetch(`https://gotlife-fd3fa-default-rtdb.asia-southeast1.firebasedatabase.app/Login`);
  
}



