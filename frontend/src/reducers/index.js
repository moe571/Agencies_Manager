import { combineReducers } from "redux";
import agencyReducer from "./agencyReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  agency: agencyReducer,
});
