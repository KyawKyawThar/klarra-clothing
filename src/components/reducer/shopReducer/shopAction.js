import { shopActionsType } from './shop.type';

export const updateCollections = (collectionMap) => {
  return {
    type: shopActionsType.UPDATE_COLLECTIONS,
    payload: collectionMap,
  };
};
