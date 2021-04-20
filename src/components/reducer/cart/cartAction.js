import { cartActionsTypes } from './cartType';

export const toggleCartHidden = () => ({
  type: cartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => {
  return {
    type: cartActionsTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: cartActionsTypes.REMOVE_ITEM,
    payload: item,
  };
};
export const clearItemFromCart = (item) => {
  return {
    type: cartActionsTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
