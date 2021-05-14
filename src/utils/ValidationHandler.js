import * as validate from "./Validator";

export function handleRequired(validationData) {
  let error = { isError: false };

  // Object.keys(validationData).map((value, key) => {   // original code
  Object.keys(validationData).map((value) => {
    //let value = this[`${type}Ref`].value(),
    let isEmpty = validate._isEmpty(validationData[value].value),
      typeMatch = {};

    if (!isEmpty) {
      //Add more cases depending upon the types that need to be checked
      switch (validationData[value].type) {
        case "email":
          typeMatch["hasPassed"] = validate._isValidEmail(
            validationData[value].value
          );
          !typeMatch["hasPassed"]
            ? (error[`${value}Error`] =
              "Please Enter Valid Email eg. (abc@abc.com)")
            : null;
          break;
      }
    } else {
      error[`${value}Error`] = true;
    }
  });
  Object.keys(error).length > 1 ? (error["isError"] = true) : null;
  return error;
}

export function simulationParamRequired(validationData) {
  let error = { isError: false };

  Object.keys(validationData).map((value) => {
    let isEmpty = validate._isEmpty(validationData[value]);

    if (isEmpty) {
      error[`${value}Error`] = true;
    }
  });
  Object.keys(error).length > 1 ? (error["isError"] = true) : null;
  return error;
}
