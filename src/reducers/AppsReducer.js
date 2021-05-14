// import * as types from "../actions/actionTypes";
// import { DEFAULT_LOCALE } from '../i18n';

const initialState = {
  msg: "test",
  test: "initial",
};

export default function AppsReducer(state = initialState, action) {
  switch (action.type) {
    case "TEST":
      console.log("reached")
      return {
        ...state,
        msg: action.payload.msg
      };

    default:
      return state;
  }
}
