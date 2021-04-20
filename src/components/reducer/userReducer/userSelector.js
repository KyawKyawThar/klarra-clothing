import { createSelector } from 'reselect';

const selectUser = (state) => state.user; //rootReducer ka user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
