import { ERROR_FOUND, CLEAR_ERROR } from './types';

export const errorFound = (errMessage) => {
	return {
		type: ERROR_FOUND,
		payload: errMessage
	}
}

export const clearError = () => {
	return {
		type: CLEAR_ERROR
	}
}