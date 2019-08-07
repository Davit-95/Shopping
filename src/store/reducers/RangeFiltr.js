
import {
  FETCH_FILTRE_PRICE_REQUEST,
  FETCH_FILTRE_PRICE_SUCCESS,
  FETCH_FILTRE_PRICE_FAIL,
}
  from '../actions/product';


const initialState = {
  prod: [],

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILTRE_PRICE_REQUEST: {
      return { ...state, prod: initialState.prod };
    }
    case FETCH_FILTRE_PRICE_SUCCESS: {
      return { ...state, prod: action.payload.data };
    }
    case FETCH_FILTRE_PRICE_FAIL: {
      return { ...state, prod: initialState.prod };
    }
    default: {
      return state;
    }
  }
}
