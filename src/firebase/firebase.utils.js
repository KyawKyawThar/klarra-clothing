import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAnhgWydSjSXvWF2AQPl9w0ynvqNpiWKH4',
  authDomain: 'kara-db.firebaseapp.com',
  projectId: 'kara-db',
  storageBucket: 'kara-db.appspot.com',
  messagingSenderId: '76042695313',
  appId: '1:76042695313:web:b6cb889bc8dd9273ed0530',
};

firebase.initializeApp(config);

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

//Moving shop data into firebase

export const addCollectionsAndDocument = async (
  collectionsKey,
  ObjectToAdd
) => {
  const collectionRef = firestore.collection(collectionsKey);
  const batch = firestore.batch();
  ObjectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

//Exporting firebase shop data to frontend

export const converCollectionSnapshotToMap = (collections) => {
  const transformCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
