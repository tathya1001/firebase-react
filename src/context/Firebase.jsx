import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth"

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
} from "firebase/firestore";


const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyAXFVPtj1VCTjlprbOvL-atTgHfFhfjGyc",
    authDomain: "fir-demo-61b1c.firebaseapp.com",
    projectId: "fir-demo-61b1c",
    storageBucket: "fir-demo-61b1c.appspot.com",
    messagingSenderId: "183110674428",
    appId: "1:183110674428:web:0389c9d046207308f1f479"
};



export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);


const gooogleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);



    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
        });
    }, []);

    // console.log(user);
    const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, gooogleProvider)

    const handleCreateNewListing = async (name, isbn, price, owner, icon, color) => {
        return await addDoc(collection(firestore, "books"), {
            name,
            isbn,
            price,
            owner: user.uid,
            icon,
            color
        });
    };

    const listAllBooks = () => {
        return getDocs(collection(firestore, "books"));
      };


    const isLoggedIn = user ? true : false;

    return <FirebaseContext.Provider
        value={{
            signupUserWithEmailAndPassword,
            signinUserWithEmailAndPassword,
            signinWithGoogle,
            isLoggedIn,
            handleCreateNewListing,
            listAllBooks
        }}>
        {props.children}
    </FirebaseContext.Provider>

};