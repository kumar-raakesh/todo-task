import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import AppsReducer from "./AppsReducer";

const rootReducer = combineReducers({
  AppsReducer,
  routing: routerReducer,
});

export default rootReducer;
