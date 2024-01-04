import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  loginUser: userReducer,
});

export default rootReducer;
