export default error => {
  switch (error.code) {
    case "ECONNABORTED":
      return {
        type: "SIGNIN_ERROR",
        payload: {
          code: error.code,
          errorMsg: "Request timeout exceeded"
        }
      };
    default:
      return false;
  }
};
