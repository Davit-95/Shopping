import {DEL_CART_ITEM_FAIL, DEL_CART_ITEM_REQUEST, DEL_CART_ITEM_SUCCESS} from "../actions/cart";


const initialState = {
  delC: {},

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DEL_CART_ITEM_REQUEST: {console.log(action,'reducer')
      return { ...state, delC: initialState.delC };
    }
    case DEL_CART_ITEM_SUCCESS: {
      return { ...state, delC: action.payload.data };
    }
    case DEL_CART_ITEM_FAIL: {
      return { ...state, delC: initialState.delC };
    }
    default: {
      return state;
    }
  }
}
