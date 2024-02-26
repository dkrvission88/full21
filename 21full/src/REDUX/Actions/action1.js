import { REGISTER_FAILURE,REGISTER_SUCCESS,REGISTER_REQUEST } from "../Constant/constant";

import axios from "axios";


export const registerS = (formData) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const response = await axios.post('http://localhost:8000/api/auth/contractor-register', formData);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.message
      });
    }
  };
};

























// import * as constant from  "../Constant/constant";
// import {CONTRACTOR_OR_SUPPLIRE_LOGIN} from  "../Constant/constant";




// export const getSupplierL=(data)=>{
//   return{
//     type:CONTRACTOR_OR_SUPPLIRE_LOGIN,
//     payload:data
//   }
// }



// export const login = (username, password) => {
//   return async (dispatch) => {
//     dispatch({ type: constant.LOGIN_REQUEST });
//     try {
     
//       const user = await fakeApiLogin(username, password);
//       dispatch({ type: constant.LOGIN_SUCCESS, payload: { user } });
//     } catch (error) {
//       dispatch({ type: constant.LOGIN_FAILURE, payload: { error } });
//     }
//   };
// };

// export const logout = () => {
//   return { type: constant.LOGOUT };
// };


// const fakeApiLogin = async (username, password) => {
  
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   return { username }; 
// };