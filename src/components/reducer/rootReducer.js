import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';

import userReducer from './userReducer/userReducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
