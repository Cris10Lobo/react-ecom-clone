import { UserActionTypes } from './user.types';
//this is to send the proper object to the reducer so we can update the proper state using the appropriate actions

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
