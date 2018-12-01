import { ADD_EVENT } from '../actions/Types';
import { SET_ATTENDING } from '../actions/Types';

const initialState = {
  events: [],
};

const eventReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_EVENT:
      action.event.key = Math.random();
      return {
        events: [...state.events, action.event],
      };
    case SET_ATTENDING:
      action.event.status = action.status;
      return {
        events: state.events.map((event) => {
          if (event.key === action.event.key) {
            return action.event;
          } else {
            return event;
          }
        }),
      };
    default:
      return state;
  }
}

export default eventReducer;
