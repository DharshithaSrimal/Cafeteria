import axios from 'axios';
import { 
    SET_MEAL_ORDER,
    GET_MEAL_ORDER,
    DELETE_MEAL_ORDER
 } from '../types/SettingTypes';

//set meal order
export const setMealOrder = (userData, history) => dispatch => {
  axios
    .post('/neworder', userData)
    .then(res => history.push('/settings'))
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    );
};