import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCkSumqLQcUqbtqSMUSk4r5LDTccUY93Zs",
  authDomain: "finance-manager-7f375.firebaseapp.com",
  projectId: "finance-manager-7f375",
  storageBucket: "finance-manager-7f375.firebasestorage.app",
  messagingSenderId: "478498699741",
  appId: "1:478498699741:web:61d5d4bd8ec32c0cec1e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Export Auth instance
export const auth = getAuth(app);