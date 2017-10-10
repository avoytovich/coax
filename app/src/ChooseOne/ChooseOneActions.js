const CHOOSE_SUCCESS = 'LOGIN_SUCCESS';

export const ChooseOneSuccess = (selectedCheckboxes) => {
  let array = [];
  for (const checkbox of selectedCheckboxes) {
    array.push(checkbox);
  }
  return {
    type: CHOOSE_SUCCESS,
    payload: array
  };
};
