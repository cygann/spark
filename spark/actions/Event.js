import { ADD_EVENT } from './Types';
import { SET_ATTENDING } from './Types';
import { SET_NUM_ATTENDING } from './Types';

export const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    event: event,
  }
}

export const setAttending = (event, status) => {
  return {
    type: SET_ATTENDING,
    event: event,
    status: status,
  }
}

export const setNumAttending = (event, number) => {
  return {
    type: SET_NUM_ATTENDING,
    event: event,
    number: number,
  }
}
