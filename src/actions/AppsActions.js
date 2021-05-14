// import axios from "../utils/xhrRequestHandler";
// GET AppListing Action ..........

export function testAction() {
  console.log("called");
  return (dispatch) => {
    dispatch({
      type: "TEST",
      payload: {
        msg: "Hello Test",
      },
    });
  };
}
