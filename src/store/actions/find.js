export const FIND_DATA_REQUEST = 'FIND_DATA_REQUEST';
export const FIND_DATA_SUCCESS = 'FIND_DATA_SUCCESS';
export const FIND_DATA_FAIL = 'FIND_DATA_FAIL';

export function findProduct(search) {
  return {
    type: FIND_DATA_REQUEST, payload: { search },
  };
}