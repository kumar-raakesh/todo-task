// export const passwordReg = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$");
export const emailReg = new RegExp(
  "^([\\w\\.\\+\\-]+\\@[a-zA-Z0-9\\.\\-]+\\.[a-zA-z0-9]{2,4})$"
);

export const passwordReg = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export function isValidURL(url) {
  const domainRegex = /(^(http:\/\/|https:\/\/)?(((www\.)?([0-9A-Za-z-]+\.)([A-Za-z]){2,3}(\/)?([0-9A-Za-z]*(\.|-)*[0-9A-Za-z]*(\/)?)?)|((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}))[^\w$-.:->{-~!"^_`[\]](\?)?([0-9A-Za-z]+=[0-9A-Za-z]+(&)?)*)/gi;
  function isValidIpv4() {
    let ip = url
      .split(/^https?:\/\//)[1]
      .split("/")[0]
      .split("@")
      .pop();
    if (ip.includes(":")) {
      ip = ip.split(":")[0];
    }
    if (ip == "localhost") {
      return true;
    } else {
      if (typeof ip !== "string") return false;
      if (!ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) {
        return false;
      }
      let result =
        ip.split(".").filter(octect => octect >= 0 && octect <= 255).length ===
        4;
      return result;
    }
  }
  if (!/^https?:\/\//.test(url)) url = `http://${url}`;
  return isValidIpv4() || domainRegex.test(url);
}
