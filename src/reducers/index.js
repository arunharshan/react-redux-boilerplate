import { combineReducers } from 'redux';
import search from './searchReducer';
export default combineReducers({
  user: search
});
