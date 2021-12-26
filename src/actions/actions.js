export const createUser = (newUser) => {
  return {
    type: "USER_SUBMIT",
    newUser: { ...newUser },
  };
};
export const setError = (value) => {
  return {
    type: "ERROR",
    error: value,
  };
};
export const setLoading = (value) => {
  return {
    type: "LOADING",
    loading: value,
  };
};
export const submitUser = (newUser) => {
  return (dispatch) => {
    dispatch(setError(false));
    dispatch(setLoading(true));

    // simulate api call
    setTimeout(() => {
      dispatch(createUser(newUser));
      dispatch(setLoading(false));
    }, 2500);
    //at real api call => .then(()=>{....}).catch(()=>dispatch(setError(true)))
  };
};
