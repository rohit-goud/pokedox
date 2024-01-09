import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCijROLe0PEYcG1o3CrXcDjH5WrEkdLYIs",
  authDomain: "pokedox-my.firebaseapp.com",
  projectId: "pokedox-my",
  storageBucket: "pokedox-my.appspot.com",
  messagingSenderId: "30442343595",
  appId: "1:30442343595:web:fc1925ebacd1f31f3dfbee",
  measurementId: "G-7GGL0ZB1XV"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");