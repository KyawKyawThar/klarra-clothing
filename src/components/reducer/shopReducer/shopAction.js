import { shopActionsType } from "./shop.type";
import {
  converCollectionSnapshotToMap,
  firestore,
} from "../../../firebase/firebase.utils";

export const fetchCollectionStart = () => {
  return {
    type: shopActionsType.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionSuccess = (collectionsMap) => {
  return {
    type: shopActionsType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionFailure = (errorMessage) => {
  return {
    type: shopActionsType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchCollectionAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = converCollectionSnapshotToMap(snapShot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchCollectionFailure(err.errorMessage)));
  };
};
