import { SUBMIT_USER, LOADING, ERROR } from "../actions/actionsTypes";
const initionalState = {
  loading: false,
  error: false,
  users: [],
};

const reducer = (state = initionalState, { type, payload }) => {
  // returns new state without modifying the state directly
  switch (type) {
    case SUBMIT_USER:
      return { ...state, users: state.users.concat(payload) };
    case LOADING:
      return { ...state, loading: payload };
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
