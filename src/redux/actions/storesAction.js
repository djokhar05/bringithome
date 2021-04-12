import { GET_STORES, PROCESSING, SORT_STORES, STOP_LOADING, MORE_DATA, NO_MORE_DATA } from './types';
import api from '../../api';
import { changeStrVal } from '../../helpers/generalModule';


export const processing = () => ({
    type: PROCESSING
})

export const getStores = (incrementPage, page, limit) => async dispatch => {
    try{
        //first check if you need to increment page
        //after getting a response from the server
        page = incrementPage ? page+1 : page;

        //console.log(`Page is ${page}`);

        const response = await api.get(
            `/${page}/${limit}`
        );
        const stores = response.data.stores;

        //console.log(stores.length);

        if(stores.length < 1){
            dispatch({
                type: STOP_LOADING
            })
        } else {
            if(stores.length <= limit){
                dispatch({
                    type: STOP_LOADING
                })
            }
            dispatch({ type: GET_STORES, payload: {page, stores}})
        }

    } catch (err){
        console.log(err);
    }
}

export const sortStores = (incrementPage=false, page, limit, params) => async dispatch => {

    let sortString = "";
    page = incrementPage === true ? page+1 : page;

    //Check if new search parameter were included in this request
    if(params.hasOwnProperty('new')){
        var {key, value} = params.new;

        if(params.old.includes(key)){
          if(key == "area"){
            /*
              Make sure to remove the old area inside the former search string
              in the state, so you can add a new area=value pair. if not it keeps
              appending more area=value to the search string
            */
            let areaIndex = params.old.indexOf(key);  //get the position of the former area=value pair
            let oldArea = params.old.slice(areaIndex,); //extract the area=value string lterals

            let oldParams = params.old;       //copy the old params.old value
            let modifiedParams = oldParams.replace(oldArea, '');  //remove the old area string literal

            //Reset the page number to 1, since you're searching for new data
            sortString = `${modifiedParams}${key}=${value}&`;

          } else {
            sortString = `?page=${page}&limit=${limit}&${key}=${value}&`;
          }
        } else {
          //If the old param string doesn't include an old key, append them to the search string
          if(params.old.includes('page')){
            sortString = changeStrVal(params.old, page, 'page');
            sortString = `${sortString}${key}=${value}&`;

          } else {
            sortString = `${params.old}page=${page}&limit=${limit}&${key}=${value}&`;
          }
        }

    } else {
        //if not, send the same search paramters but add 1 to the page value
        sortString = changeStrVal(params.old, page, 'page');
    }

    try{
        dispatch({
          type: MORE_DATA
        })
        const response = await api.get(
            `/sortStores/${sortString}`
        );
        const sortedStores = response.data.stores;

        if(sortedStores.length < 1){
            dispatch({
                type: STOP_LOADING
            });
            dispatch({
                type: SORT_STORES,
                payload: {sortString, sortedStores, page}
            });
            dispatch({
              type: NO_MORE_DATA
            })
        } else {
            //Chceck if the return result is no longer up to
            //the required limit, then stop loading
            if(sortedStores.length < limit){
                dispatch({
                    type: STOP_LOADING
                })
                dispatch({
                  type: NO_MORE_DATA
                })
            }
            dispatch({
                type: SORT_STORES,
                payload: {sortString, sortedStores, page}
            })
        }

    } catch (err){
        console.log(err);
    }
}
