import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let config = {
    apiKey: "AIzaSyDsA7iVBbe1FnQ71u4LrwscM5scYGcmBvw",
    authDomain: "react-demo-shop.firebaseapp.com",
    databaseURL: "https://react-demo-shop.firebaseio.com",
    projectId: "react-demo-shop",
    storageBucket: "react-demo-shop.appspot.com",
    messagingSenderId: "1046622587352",
    appId: "1:1046622587352:web:1ce904ba1f742f4e420aad"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (authUser, otherData) => {
    if (!authUser) return null;
    const userRef = firestore.doc(`users/${authUser.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists){
        try{
            await userRef.set({
                displayName: authUser.displayName,
                email: authUser.email,
                createdAt: new Date(),
                ...otherData
            });
        }catch (e) {
            console.log(e);
        }
    }
    return userRef;
};

export default firebase;
