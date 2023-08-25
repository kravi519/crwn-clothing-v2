import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5HkfJezsHepnECW_yoWXg4KEF62drVOk",
    authDomain: "crown-clothing-db-dcbb1.firebaseapp.com",
    projectId: "crown-clothing-db-dcbb1",
    storageBucket: "crown-clothing-db-dcbb1.appspot.com",
    messagingSenderId: "1029384607332",
    appId: "1:1029384607332:web:4bd3c7eb489466ff7c7171",
    measurementId: "G-J6KM9VGQQS"
};

  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


  export const db = getFirestore();
  export const createUserDocFromAuth = async (userAuth, additionalInformation= {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{
              displayName,
              email,
              createdAt,
              ...additionalInformation
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }

          return userDocRef;
    }
 }

 export const createAuthUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(email, password);
 }