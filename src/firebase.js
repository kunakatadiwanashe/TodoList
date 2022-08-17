import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAzpJjDqGsY-gWR0Vmz0aCKteu5wcz3EpQ",
    authDomain: "todoapp-a59ce.firebaseapp.com",
    projectId: "todoapp-a59ce",
    storageBucket: "todoapp-a59ce.appspot.com",
    messagingSenderId: "5584249064",
    appId: "1:5584249064:web:9e7327fb783b09c31a695d"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };