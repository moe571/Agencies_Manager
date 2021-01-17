import axios from "axios";
import { tokenConfig } from "./authActions";
import {
  GET_AGENCIES,
  ADD_AGENCY,
  DELETE_AGENCY,
  AGENCIES_LOADING,
} from "./types";

export const getAgencies = () => (dispatch) => {
  dispatch(setAgenciesLoading());
  axios
    .get("/api/agencies")
    .then((res) =>
      dispatch({
        type: GET_AGENCIES,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const addAgency = (item) => (dispatch, getState) => {
  axios
    .post("/api/agencies", item, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_AGENCY,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const updateAgency = (id, form) => {
  return async (dispatch, getState) => {
    axios
      .put(`/api/agencies/update/${id}`, form, tokenConfig(getState))
      .then((res) => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteAgency = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/agencies/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_AGENCY,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};

export const setAgenciesLoading = () => {
  return {
    type: AGENCIES_LOADING,
  };
};
