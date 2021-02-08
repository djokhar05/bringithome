import { LOCATION_FOUND } from './types';

export const locationFound = ({ address, suburb }) => {
    return {
        type: LOCATION_FOUND,
        payload: { address, suburb }
    }
}