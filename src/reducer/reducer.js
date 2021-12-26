const initionalState = {
  loading: false,
  error: false,
  users: []
};

const reducer = (state = initionalState, action) => {
  // returns new arry without modifying the state directly
  switch (action.type) {
    case "USER_SUBMIT":
      return { ...state, users: state.users.concat(action.newUser) };
      
    case "LOADING":
      return { ...state,loading:action.loading };
    case "ERROR":
      return { ...state,error:action.error };
    default:
      return state;
  }
};

export default reducer;
