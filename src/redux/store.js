import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//this is done for scalability.So as to add more args based on conditions.
const middlewares = [logger];

//...middlewares is the spread values in logger goes into applyMiddleware as args.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
