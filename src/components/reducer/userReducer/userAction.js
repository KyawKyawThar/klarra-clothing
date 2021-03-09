import { userActionsTypes } from './userType';

export const setCurrentUser = (user) => {
  return {
    type: userActionsTypes.SET_CURRENT_USER, // same with userReducer declare variable
    payload: user,
  };
};
