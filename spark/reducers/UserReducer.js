import { ADD_USER } from '../actions/Types';
import { SET_UNREAD } from '../actions/Types';
import { ADD_MESSAGE } from '../actions/Types';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      if (!action.user.key) action.user.key = Math.random();
      return {
        users: [...state.users, action.user],
      };
    case SET_UNREAD:
      action.user.conversation.unread = action.status;
      return {
        users: state.users.map((user) => {
          if (user.key === action.user.key) {
            return action.user;
          } else {
            return user;
          }
        }),
      };
    case ADD_MESSAGE:
      action.user.conversation.messages = [action.message, ...action.user.conversation.messages];
      if (!action.user.key) action.user.key = Math.random();
      return {
        users: state.users.map((user) => {
          if (user.key === action.user.key) {
            return action.user;
          } else {
            return user;
          }
        }),
      };
    default:
      return state;
  }
}

export default userReducer;
