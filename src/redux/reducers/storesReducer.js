import { GET_STORES, STOP_LOADING, SORT_STORES, PROCESSING, NO_MORE_DATA, MORE_DATA, SEARCHING_FOOD } from '../actions/types';

const INITIAL_STATE = {
    stores: [],
    page: 1,
    loading: false,
    sortParams: `?`,
    sorting: false,
    rootLoading: true,
    hasMoreToLoad: true,
    limit: 6,
    sortingFood: false,
    food: '',
    searchingForFood: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case STOP_LOADING:
          return {
            ...state,
            loading: false,
          }

        case GET_STORES:
          //console.log(action.payload.stores)
          if(action.payload.page == 1){
            state.stores = [];

            return {
              ...INITIAL_STATE,
              stores: action.payload.stores,
              page: action.payload.page,
              sortParams: `?`,
              loading: true, rootLoading: false, sortingFood: false
            };
          } else {
              return {
                  ...state,
                  stores: [ ...state.stores, ...action.payload.stores],
                  page: action.payload.page,
                  loading: true, rootLoading: false
              }
          }

        case SORT_STORES:
          if(action.payload.page == 1){
            return {
                ...state,
                stores: action.payload.sortedStores,
                sortParams: action.payload.sortString,
                page: action.payload.page,
                sorting: action.payload.sortingFood == undefined ? true : false, rootLoading: false,
                sortingFood: action.payload.sortingFood == undefined ? false : true,
                food: action.payload.food == undefined ? '' : action.payload.food,
                searchingForFood: false
            }
          } else {
            return {
                  ...state,
                  stores: [ ...state.stores, ...action.payload.sortedStores],
                  sortParams: action.payload.sortString,
                  page: action.payload.page,
                  sorting: true, rootLoading: false
              }
          }

        case SEARCHING_FOOD:
          return { ...state, searchingForFood: true }

        case PROCESSING:
          return { ...state, rootLoading: true, loading: true }

        case NO_MORE_DATA:
          return { ...state, hasMoreToLoad: false}

        case MORE_DATA:
          return { ...state, hasMoreToLoad: true }

        default:
            return state
    }
}
