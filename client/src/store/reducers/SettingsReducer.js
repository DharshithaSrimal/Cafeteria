/* eslint-disable indent */
import { 
    SET_MEAL_ORDER,
    GET_MEAL_ORDER,
    DELETE_MEAL_ORDER 
    } from '../types/SettingTypes';

const initialState = {
  mealOrders: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MEAL_ORDER:
      return {
        ...state,
        isLoading: true
      };
    // case LOGIN_SUCCESS:
    //   const { data } = action.payload;
    //   return {
    //     ...state,
    //     // ...action.payload,
    //     isAuthenticated: true,
    //     isLoading: false,
    //     token: data.token
    //   };
    default:
      return state;
  }
}
