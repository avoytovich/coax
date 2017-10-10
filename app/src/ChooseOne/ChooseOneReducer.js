const CHOOSE_SUCCESS = 'LOGIN_SUCCESS';

const Choose = (state = {}, action) => {
  switch (action.type) {
    case CHOOSE_SUCCESS:
      return {
        isChecked: action.payload
      };
    default:
      return state;
  }
}

export default Choose;
