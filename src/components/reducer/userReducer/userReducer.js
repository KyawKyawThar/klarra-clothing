//import { combineReducers } from 'redux';
import { userActionsTypes } from './userType';
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsTypes.SET_CURRENT_USER: //same with userAction declare variable
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

// export default combineReducers({
//   user: userReducer,
// });

export default userReducer;
