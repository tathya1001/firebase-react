import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc,
    doc,
    query,
    where,
    updateDoc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        });
    }, []);

    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

    const handleCreateNewListing = async (name) => {
        return await addDoc(collection(firestore, "users"), {
            name,
            userID: user.uid,
            currencyID: 1,
            totalincome: 0,
            totalexpense: 0,
        });
    };

    const handleNewUser = async (name, userId) => {
        return await setDoc(doc(firestore, "users", userId), {
            name: name,
            userID: userId,
            currencyID: 1,
            totalincome: 0,
            totalexpense: 0,
        });
    };

    const handleNewCredit = async (name, left, completed, userId) => {


        return await addDoc(collection(firestore, "users", userId, "credit"), {
            name: name,
            left: parseInt(left),
            completed: parseInt(completed),
        });
    };

    const handleCreditPay = async (creditId, completed, completedAdded, userId) => {
        console.log("Credit response given");

        await updateDoc(doc(firestore, "users", userId, "credit", creditId), {
            completed: parseInt(completed) + parseInt(completedAdded),
        });
        console.log("Credit response updated successfully!");

        window.location.reload(); // change this !important
    };

    const handleCreditAdd = async (creditId, left, addition, userId) => {
        console.log("Credit added given");

        await updateDoc(doc(firestore, "users", userId, "credit", creditId), {
            left: parseInt(left) + parseInt(addition),
        });
        console.log("Credit response updated successfully!");

        window.location.reload(); // change this !important
    };




    const listAllBooks = () => {
        return getDocs(collection(firestore, "users"));
    };


    const listAllCredits = (userId) => {
        return getDocs(collection(firestore, "users", userId, "credit"));
    };

    const getBookById = async (id) => {
        const docRef = doc(firestore, "users", id);
        const result = await getDoc(docRef);
        return result;
    };

    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path));
    };

    const placeOrder = async (bookId, qty) => {
        const collectionRef = collection(firestore, "users", bookId, "orders");
        const result = await addDoc(collectionRef, {
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            qty: Number(qty),
        });
        return result;
    };

    const fetchMyBooks = async (userId) => {
        const collectionRef = collection(firestore, "users");
        const q = query(collectionRef, where("userID", "==", userId));

        const result = await getDocs(q);
        return result;
    };

    const logout = async () => {
        try {
            await signOut(firebaseAuth);
            setUser(null);
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    const getOrders = async (bookId) => {
        const collectionRef = collection(firestore, "users", bookId, "orders");
        const result = await getDocs(collectionRef);
        return result;
    };

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider
            value={{
                signinWithGoogle,
                signupUserWithEmailAndPassword,
                signinUserWithEmailAndPassword,
                handleCreateNewListing,
                listAllBooks,
                listAllCredits,
                getImageURL,
                getBookById,
                placeOrder,
                fetchMyBooks,
                getOrders,
                isLoggedIn,
                user,
                handleNewUser,
                handleNewCredit,
                // handleCreditResponse,
                handleCreditAdd,
                handleCreditPay,
                logout
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
};