import * as actionTypes from "./actionTypes";
import axios from "../../Axios/axios-auth";
import apiKey from "../../Axios/ApiKey";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userID) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userID,
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
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};
