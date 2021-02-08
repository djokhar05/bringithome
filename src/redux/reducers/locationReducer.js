import { LOCATION_FOUND } from '../actions/types';

const INITIAL_STATE = {
    place: {
        address: '',
        suburb: ''
    }
}

export default (state=INITIAL_STATE, action) => {
    //console.log(action);
    switch(action.type){
        case LOCATION_FOUND:
            return { 
                ...state, 
                place:{
                    ...state.location,
                    address: action.payload.address,
                    suburb: action.payload.suburb
                }
            }
        default:
            return state;
    }
}