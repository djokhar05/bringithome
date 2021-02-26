import { GET_STORES, PROCESSING } from './types';
import api from '../../api';

export const processing = () => ({
    type: PROCESSING
})

export const getStores = (incrementPage, page, limit) => async dispatch => {
    try{
        page = incrementPage ? page+1 : page;
        
        //console.log(`Page is ${page}`);
        const response = await api.get(
            `/${page}/${limit}`
        );
        const stores = response.data.stores;

        if(stores.length < 1){
            dispatch({
                type: PROCESSING
            })
        } else {
            dispatch({ type: GET_STORES, payload: {page, stores}})
        }

    } catch (err){
        console.log(err);
    }
}