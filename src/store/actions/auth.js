import * as actionTypes from "./actionTypes";
import axios from "../../Axios/axios-auth";
import apiKey from "../../Axios/ApiKey";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = `/v1/accounts:signUp?key=${apiKey}`;
    if (!isSignUp) {
      url = `/v1/accounts:signInWithPassword?key=${apiKey}`;
    }
    console.log(url, isSignUp);
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
