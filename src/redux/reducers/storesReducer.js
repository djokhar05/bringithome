import { GET_STORES } from '../actions/types';

const INITIAL_STATE = {
    stores: [],
    page: 1
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_STORES:
            //console.log(action.payload)
            if(action.payload.page == 1){
                return { 
                    stores: action.payload.stores,
                    page: action.payload.page
                };
            } else {
                return {
                    stores: [ ... state.stores, ...action.payload.stores],
                    page: action.payload.page
                }
            }
        default:
            return state
    }
}