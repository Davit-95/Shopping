
import {
  FETCH_FILTRE_COLOR_REQUEST,
  FETCH_FILTRE_COLOR_SUCCESS,
  FETCH_FILTRE_COLOR_FAIL,
}
  from '../actions/product';


const initialState = {
  color: [],

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILTRE_COLOR_REQUEST: {
      return { ...state, color: initialState.color };
    }
    case FETCH_FILTRE_COLOR_SUCCESS: {
      return { ...state, color: action.payload.data };
    }
    case FETCH_FILTRE_COLOR_FAIL: {
      return { ...state, color: initialState.color };
    }
    default: {
      return state;
    }
  }
}
