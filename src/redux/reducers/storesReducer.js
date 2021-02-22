import { GET_STORES } from '../actions/types';

const INITIAL_STATE = {
    stores: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_STORES:
            //console.log(action.payload)
            return { stores: action.payload };
        default:
            return state
    }
}