import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyANRPC3GWFaTTaED52nJBallQvAPOgW-Y8',
  authDomain: 'ecom-clone-db.firebaseapp.com',
  projectId: 'ecom-clone-db',
  storageBucket: 'ecom-clone-db.appspot.com',
  messagingSenderId: '723194762390',
  appId: '1:723194762390:web:ce0b32cb3a24cbfaee1eb7',
  measurementId: 'G-4CSBSZ2VS8',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
