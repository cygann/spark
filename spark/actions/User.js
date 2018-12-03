import { ADD_USER } from './Types';
import { SET_UNREAD } from './Types';
import { ADD_MESSAGE } from './Types';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user: user,
  }
}

export const setUnread = (user, status) => {
  return {
    type: SET_UNREAD,
    user: user,
    status: status,
  }
}

export const addMessage = (user, message) => {
  return {
    type: ADD_MESSAGE,
    user: user,
    message: message,
  }
}
