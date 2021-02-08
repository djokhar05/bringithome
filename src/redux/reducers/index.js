import { combineReducers } from 'redux';
import LocationReducer from './locationReducer';

export default combineReducers({
    location: LocationReducer
})