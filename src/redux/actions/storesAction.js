import { GET_STORES } from './types';
import api from '../../api';


export const getStores = () => async dispatch => {
    try{
        const response = await api.get("/");
        const stores = response.data.stores;

        dispatch({ type: GET_STORES, payload: stores})
    } catch (err){
        console.log(err);
    }
}