export function testAction() {
  return (dispatch) => {
    dispatch({
      type: "TEST",
      payload: {
        msg: "Hello Test",
      },
    });
  };
}

export function addItem(value) {
  let localArr = JSON.parse(localStorage.getItem("todos") || "[]");
  if (value) {
    let obj = {
      id: localArr.length + 1,
      item: value,
      checked: false,
    };
    localArr.push(obj);
    localStorage.setItem("todos", JSON.stringify(localArr));
  }

  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: {
        value: localArr || [],
      },
    });
  };
}

export function delItem(index) {
  let localArr = JSON.parse(localStorage.getItem("todos") || "[]");
  localArr.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(localArr));

  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: {
        value: localArr || [],
      },
    });
  };
}

export function markItem(index, flag) {
  let localArr = JSON.parse(localStorage.getItem("todos") || "[]");
  if (localArr.length > 0) {
    localArr[index].checked = flag;
  }
  localStorage.setItem("todos", JSON.stringify(localArr));

  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: {
        value: localArr || [],
      },
    });
  };
}
