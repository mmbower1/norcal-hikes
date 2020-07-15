import axios from 'axios';
import { NEW_SUBSCRIPTION, ERROR_SUBSCRIPTION } from './types';

// subscribe new user
export const subscribe = ({ name, email }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ name, email })
  try {
    const res = await axios.post('/subscribe', body, config);
    dispatch({
      type: NEW_SUBSCRIPTION,
      // payload: res.data // jwt token
    });
    
  } catch (err) {
    // const errors = err.response.data.errors;
    if (err) {
      console.log(err);
    }
    dispatch({
      type: ERROR_SUBSCRIPTION
    })
  }
}
