import { ERROR_FOUND, CLEAR_ERROR } from '../actions/types';

const INITIAL_STATE = {
  error: false,
  errMessage: ''
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type){
    case ERROR_FOUND:
      return {
        ...state, error: true, errMessage: action.payload
      }

    case CLEAR_ERROR:
      return INITIAL_STATE

    default:
      return state
    }
}
