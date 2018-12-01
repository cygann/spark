import { createStore, combineReducers } from 'redux';
import eventReducer from './reducers/EventReducer';
import userReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  users: userReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
