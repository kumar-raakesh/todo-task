import axios from "axios";
import promise from "promise";
import { store } from "../index";
import errorTypes from "../config/commonErrorsConfig";
// import { GET_REFRESH_TOKEN } from "../actions/actionTypes";
import { REFRESH_TOKEN } from "../config/UrlConstants";
import { replace } from "react-router-redux";
const axiosInstance = axios;
// axiosInstance.defaults.timeout = 10000;     // creating problem in rendering ITAdminOverview data

let requestQueue = [];
let isGenratingNewToken = false;

axiosInstance.interceptors.request.use(
  config => {
    if (!config.headers.common.Authorization) {
      const accessToken = localStorage.getItem("authentication");
      if (accessToken) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `bearer ${accessToken}`;
        config.headers.common["Authorization"] = `bearer ${accessToken}`;
      }
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(undefined, error => {
  const errorType = errorTypes(error);
  if (errorType) {
    store.dispatch(errorType);
  }
  if (
    error.response &&
    error.response.status == 401 &&
    error.response.data.code == 607
  ) {
    // token expired case
    // localStorage.removeItem("authentication");
    // axios.defaults.headers.common["Authorization"] = "";
    // store.dispatch({
    //   type: "SIGNOUT"
    // });
    // store.dispatch(replace("/"));
    requestQueue.push(error.config);
    return new Promise((resolve, reject) => {
      if (!isGenratingNewToken) {
        isGenratingNewToken = true;
        axiosInstance
          .get(REFRESH_TOKEN)
          .then(tokenResponse => {
            axios.defaults.headers.common.Authorization =
              "bearer " + tokenResponse.data.accessToken;
            localStorage.setItem(
              "authentication",
              tokenResponse.data.accessToken
            );
            requestQueue.map(req => {
              req.headers.Authorization =
                "bearer " + tokenResponse.data.accessToken;
              axios(req)
                .then(res => {
                  resolve(res);
                })
                .catch(err => {
                  reject(err);
                });
            });
            isGenratingNewToken = false;
            requestQueue = [];
          })
          .catch(error => {
            error;
            localStorage.removeItem("authentication");
            axios.defaults.headers.common["Authorization"] = "";
            store.dispatch(replace("/"));
            store.dispatch({
              type: "SIGNOUT"
            });
          });
      }
    });
  } else if (
    error.response &&
    error.response.status == 401 &&
    !error.response.config.url.split("/").includes("authenticate")
  ) {
    // if user is not authorize to do any task
    // basically if api will triggler 401 when user is trying something what is not there in his role
    // store.dispatch(replace("/"));
    // store.dispatch({
    //   type: "SIGNOUT"
    // });
  } else if (
    error.response &&
    error.response.status == 401 &&
    error.response.data.code == 639
  ) {
    localStorage.removeItem("authentication");
    axios.defaults.headers.common["Authorization"] = "";
    store.dispatch(replace("/"));
    store.dispatch({
      type: "SIGNOUT"
    });
  } else if (
    error.response &&
    error.response.status == 403 &&
    error.response.data.code == 623
  ) {
    localStorage.removeItem("authentication");
    axios.defaults.headers.common["Authorization"] = "";
    store.dispatch(replace("/"));
    store.dispatch({
      type: "SIGNOUT"
    });
  }
  return Promise.reject(error);
  // if (
  //   error.response.status == "401" &&
  //   error.response.data.message == "Signature has expired."
  // ) {
  //   await axios
  //     .get(REFRESH_TOKEN)
  //     .then(async response => {
  //       axios.defaults.headers.common["Authorization"] = `jwt ${
  //         res.data.token
  //       }`;
  //       axios(error.config)
  //         .then(async response => {
  //           return Promise.resolve(response);
  //         })
  //         .catch(error => {
  //           return Promise.reject(error);
  //         });
  //     })
  //     .catch(error => {
  //       return Promise.reject(error);
  //     });
  //   // await refreshAuthToken();
  // } else {
  // }
});
export default axiosInstance;
