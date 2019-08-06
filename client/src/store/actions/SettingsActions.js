import axios from 'axios';
import { 
    SET_MEAL_ORDER,
    GET_MEAL_ORDER,
    DELETE_MEAL_ORDER
 } from '../types/SettingTypes';

// update meal order
export const updateMealOrder = (mealOrder) => {
  console.log(mealOrder);
  axios.put('/mealorders/'+ mealOrder.mealId, mealOrder)
}

//set meal order
export const setMealOrder = (newMealOrder)  => {
  console.log(newMealOrder);
  axios
    .post('/mealorders/add', newMealOrder)
    // .then(res => history.push('/settings'))
    .catch(err =>
      console.log('===',err)
      // dispatch({
      //   type: 'GET_ERRORS',
      //   payload: err.response.data
      // })
    );
};


export const deleteMealOrder = (id) => {
  axios
    .delete(`/mealorders/${id}`)
    // .then(res => history.push('/settings'))
    .catch(err =>
      console.log('===',err)
      // dispatch({
      //   type: 'GET_ERRORS',
      //   payload: err.response.data
      // })
    );
};