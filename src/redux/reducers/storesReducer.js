import { GET_STORES, PROCESSING } from '../actions/types';

const INITIAL_STATE = {
    stores: [],
    page: 1,
    loading: true
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_STORES:
            //console.log(action.payload.stores)
            if(action.payload.page == 1){
                return {
                    ...state,
                    stores: action.payload.stores,
                    page: action.payload.page,
                    loading: true
                };
            } else {
                return {
                    ...state,
                    stores: [ ... state.stores, ...action.payload.stores],
                    page: action.payload.page,
                    loading: true
                }
            }

        case PROCESSING:
            return {
                ...state, loading: false
            }
        default:
            return state
    }
}