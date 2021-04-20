import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import cartReducer from './cart/cartReducer';
import { directoryReducer } from './directoryReducer/directoryReducer';
import { shopReducer } from './shopReducer/shopReducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
