//User Reducer - this will store the state of current user.

//this is the default state.
const INITIAL_STATE = {
  currentUser: null,
};

//Actual user reducer.
//state is the current state and we spread it and update it while performing the action.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
