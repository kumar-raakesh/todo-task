// import * as types from "../actions/actionTypes";
// import { DEFAULT_LOCALE } from '../i18n';

const initialState = {
  msg: "test",
  test: "initial",
  list: [],
};

export default function AppsReducer(state = initialState, action) {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        msg: action.payload.msg,
      };
    case "ADD":
      return {
        ...state,
        list: action.payload.value,
      };
    default:
      return state;
  }
}
