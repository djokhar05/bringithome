import { GET_STORES } from './types';
import api from '../../api';


export const getStores = (incrementPage, page, limit) => async dispatch => {
    try{
        page = incrementPage ? page+1 : page;
        
        console.log(`Page is ${page}`);
        const response = await api.get(
            `/${page}/${limit}`
        );
        const stores = response.data.stores;

        dispatch({ type: GET_STORES, payload: {page, stores}})
    } catch (err){
        console.log(err);
    }
}