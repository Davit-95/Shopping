
import {FIND_DATA_REQUEST, FIND_DATA_SUCCESS, FIND_DATA_FAIL} from "../actions/find";


const initialState = {
  findDatas: [],

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FIND_DATA_REQUEST: {console.log(action,'findireducer')
      return { ...state, findDatas: initialState.findDatas };

    }
    case FIND_DATA_SUCCESS: {
      return { ...state, findDatas: action.payload.data };
    }
    case FIND_DATA_FAIL: {
      return { ...state, findDatas: initialState.findDatas };
    }
    default: {
      return state;
    }
  }
}
