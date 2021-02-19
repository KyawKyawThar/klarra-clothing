import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAnhgWydSjSXvWF2AQPl9w0ynvqNpiWKH4',
  authDomain: 'kara-db.firebaseapp.com',
  projectId: 'kara-db',
  storageBucket: 'kara-db.appspot.com',
  messagingSenderId: '76042695313',
  appId: '1:76042695313:web:b6cb889bc8dd9273ed0530',
  measurementId: 'G-ZR926F4RZ6',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
// const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
