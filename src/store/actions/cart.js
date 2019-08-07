export const DEL_CART_ITEM_REQUEST = 'DEL_CART_ITEM_REQUEST';
export const DEL_CART_ITEM_SUCCESS = 'DEL_CART_ITEM_SUCCESS';
export const DEL_CART_ITEM_FAIL = 'DEL_CART_ITEM_FAIL';


export function delCartIt(key) {
  return {
    type: DEL_CART_ITEM_REQUEST, payload: { key },
  };
}


export const CART_TOTAL_REQUEST = 'CART_TOTAL_REQUEST';
export const CART_TOTAL_SUCCESS = 'CART_TOTAL_SUCCESS';
export const CART_TOTAL_FAIL = 'CART_TOTAL_FAIL';


export function cartTotalCount() {
  return {
    type: CART_TOTAL_REQUEST, payload: {},
  };
}


export const CART_ITEM_UPDATE_REQUEST = 'CART_ITEM_UPDATE_REQUEST';
export const CART_ITEM_UPDATE_SUCCESS = 'CART_ITEM_UPDATE_SUCCESS';
export const CART_ITEM_UPDATE_FAIL = 'CART_ITEM_UPDATE_FAIL';

export function cartItemUp(key, quantity) {
  return {
    type: CART_ITEM_UPDATE_REQUEST, payload: { key, quantity },
  };
}
