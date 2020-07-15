import {
  NEW_SUBSCRIPTION,
  ERROR_SUBSCRIPTION
} from '../actions/types';

const initialState = {
  // token: localStorage.getItem('token'),
  // isAuthenticated: null,
  loading: true,
  subscribed: false
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case NEW_SUBSCRIPTION:
    // case UPDATE_ACCOUNT:
      return {
        ...state,
        loading: false,
        subscribed: true
      }
    case ERROR_SUBSCRIPTION:
      return {
        ...state,
        loading: false,
        subscribed: false
      }

      default:
        return state
  }
}