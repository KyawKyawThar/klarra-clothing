import { cardActionsTypes } from './cartType';

export const toggleCartHidden = () => ({
  type: cardActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => {
  return {
    type: cardActionsTypes.ADD_ITEM,
    payload: item,
  };
};
