import { createSelector } from 'reselect';

const selectShop = (state) => state.shop; //rootReducer ka shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
