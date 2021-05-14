import { emailReg, passwordReg } from "./ValidationRegex";

//Keep below functions pure, that is, output should be a predictable state (truthy or false). Invocations of the below functions should be in `ValidationHandler`
export function _isEmpty(value) {
  if (value && typeof value == "string" && value.trim()) return false;
  else return true;
}

export function _isValidEmail(value) {
  return emailReg.test(value.trim());
}

export function _isValidPassword(value) {
  return passwordReg.test(value);
}
