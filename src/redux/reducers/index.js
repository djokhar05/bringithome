import { combineReducers } from 'redux';
import LocationReducer from './locationReducer';
import StoresReducer from './storesReducer';

export default combineReducers({
    location: LocationReducer,
    stores: StoresReducer
})