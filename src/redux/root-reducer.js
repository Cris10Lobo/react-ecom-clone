import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

//this is the root reducer object.
//this is where all the reducer are combined together to form the mega reducer like power rangers megazord.

export default combineReducers({
  user: userReducer,
});
