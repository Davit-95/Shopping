export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export function fetchProducts(data) {
  return {
    type: FETCH_PRODUCTS_REQUEST, payload: { data },
  };
}

export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT';
export const FETCH_SINGLE_SUCCESS = 'FETCH_SINGLE_SUCCESS';
export const FETCH_SINGLE_FAIL = 'FETCH_SINGLE_FAIL';

export function fetchSingleProduct(slug) {
  return {
    type: FETCH_SINGLE_PRODUCT, payload: { slug },
  };
}


export const FETCH_FILTRE_PRICE_REQUEST = 'FETCH_FILTRE_PRICE_REQUEST';
export const FETCH_FILTRE_PRICE_SUCCESS = 'FETCH_FILTRE_PRICE_SUCCESS';
export const FETCH_FILTRE_PRICE_FAIL = 'FETCH_FILTRE_PRICE_FAIL';


export function fetchPriceFiltreF(value) {
  return {
    type: FETCH_FILTRE_PRICE_REQUEST, payload: { value },
  };
}


export const FETCH_PRICE_REQUEST = 'FETCH_PRICE_REQUEST';
export const FETCH_PRICE_SUCCESS = 'FETCH_PRICE_SUCCESS';
export const FETCH_PRICE_FAIL = 'FETCH_PRICE_FAIL';

export function fetchCheapAndExpensiveProducts() {
  return {
    type: FETCH_PRICE_REQUEST, payload: {},
  };
}

export const FETCH_FILTRE_COLOR_REQUEST = 'FETCH_FILTRE_COLOR_REQUEST';
export const FETCH_FILTRE_COLOR_SUCCESS = 'FETCH_FILTRE_COLOR_SUCCESS';
export const FETCH_FILTRE_COLOR_FAIL = 'FETCH_FILTRE_COLOR_FAIL';

export function fetchColorFilter() {
  return {
    type: FETCH_FILTRE_COLOR_REQUEST, payload: {},
  };
}

export const FETCH_ADDTO_REQUEST = 'FETCH_ADDTO_REQUEST';
export const FETCH_ADDTO_SUCCESS = 'FETCH_ADDTO_SUCCESS';
export const FETCH_ADDTO_FAIL = 'FETCH_ADDTO_FAIL';

export function AddToCart(id) {
  return {
    type: FETCH_ADDTO_REQUEST, payload: { id },
  };
}


export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAIL = 'ADD_TO_CART_FAIL';


export function fetchCart() {
  return {
    type: ADD_TO_CART_REQUEST, payload: {},
  };
}


export const CLEAR_CART_REQUEST = 'CLEAR_CART_REQUEST';
export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';
export const CLEAR_CART_FAIL = 'CLEAR_CART_FAIL';


export function clearCartFetch() {
  return {
    type: CLEAR_CART_REQUEST, payload: {},
  };
}


export const CART_COUNT_REQUEST = 'CART_COUNT_REQUEST';
export const CART_COUNT_SUCCESS = 'CART_COUNT_SUCCESS';
export const CART_COUNT_FAIL = 'CART_COUNT_FAIL';


export function cartCountFetch() {
  return {
    type: CART_COUNT_REQUEST, payload: {},
  };
}
