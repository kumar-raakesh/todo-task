export function jwtDecoder(jwt) {
  if (jwt == "undefined" || !jwt) {
    localStorage.removeItem("authentication");
    return false;
  } else {
    let userDetails = {};
    let tokens = jwt.split(".");
    userDetails = JSON.parse(atob(tokens[1]));
    return userDetails;
  }
}
