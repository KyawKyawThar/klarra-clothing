import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directoryReducer/directoryReducer';
import storage from 'redux-persist/lib/storage';
import { shopReducer } from './shopReducer/shopReducer';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
