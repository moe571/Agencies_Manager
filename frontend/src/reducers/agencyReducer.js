import {
  GET_AGENCIES,
  ADD_AGENCY,
  DELETE_AGENCY,
  AGENCIES_LOADING,
} from "../actions/types";

const initialState = {
  agencies: [],
  loading: true,
};

export default function (state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case GET_AGENCIES:
      return {
        ...state,
        agencies: action.payload,
        loading: false,
      };
    case DELETE_AGENCY:
      return {
        ...state,
        agencies: state.agencies.filter(
          (agency) => agency._id !== action.payload
        ),
      };
    case ADD_AGENCY:
      return {
        ...state,
        agencies: [action.payload, ...state.agencies],
      };
    case AGENCIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
