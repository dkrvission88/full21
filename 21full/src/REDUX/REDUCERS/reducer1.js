import { REGISTER_FAILURE,REGISTER_SUCCESS,REGISTER_REQUEST } from "../Constant/constant";
const initialState = {
  loading: false,
  error: null,
  success: false,
  data: null
};

export const reduce01 = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state, 
        loading: false,
        success: true,
        data: action.payload
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false
      };
    default:
      return state;
  }
};

