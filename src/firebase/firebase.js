import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzlHXHgEXhHEWRadSIKhToBCruMIJ1Siw",
  authDomain: "shopxy-ecommerce.firebaseapp.com",
  projectId: "shopxy-ecommerce",
  storageBucket: "shopxy-ecommerce.firebasestorage.app",
  messagingSenderId: "666962281693",
  appId: "1:666962281693:web:37c87a13a55b245dd44734",
  measurementId: "G-EX97V5ZTF7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);