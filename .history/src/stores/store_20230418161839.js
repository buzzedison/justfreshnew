import {writable} from 'svelte/store';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../lib/firebase/firebase";
export const authstore = writable({
    user: null,
    loading: true,
    data: {},
});

export const authHandlers = {
    signup: async (email, pass) => {
        await createUserWithEmailAndPassword(auth, email, pass)
    },
    login: async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    },
    // logout: async () => {
    //     await signOut(auth)
    // }

    logout: async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.error("Error signing out:", error);
        }
      },

      //google signup 
      signInWithGoogle: async () => {
        const provider = new GoogleAuthProvider();
    
        try {
          await signInWithPopup(auth, provider);
        } catch (err) {
          console.error("Error during Google Sign In:", err);
        }
      },

      //sign 
}