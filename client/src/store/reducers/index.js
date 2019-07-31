import { combineReducers } from 'redux';
import SettingsReducer from './SettingsReducer';




export default combineReducers({
  // Spreading all shared reducers
  // ...AllSharedReducers
  // You can override or add new reducers here

  settings: SettingsReducer,
});
