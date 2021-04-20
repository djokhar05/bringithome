import { combineReducers } from 'redux';
import LocationReducer from './locationReducer';
import StoresReducer from './storesReducer';
import ErrorReducer from './errorReducer';

export default combineReducers({
    location: LocationReducer,
    stores: StoresReducer,
    errors: ErrorReducer
})