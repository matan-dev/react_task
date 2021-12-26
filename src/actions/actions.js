import { SUBMIT_USER, LOADING, ERROR } from "../actions/actionsTypes";

export const createUser = (newUser) => {
  return {
    type: SUBMIT_USER,
    payload: { ...newUser },
  };
};
export const setError = (value) => {
  return {
    type: ERROR,
    payload: value,
  };
};
export const setLoading = (value) => {
  return {
    type: LOADING,
    payload: value,
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
    // at real api call => .then(()=>{....})
    // .catch(()=>dispatch(setError(true)))
    // .finelly(()=> dispatch(setLoading(false));)
  };
};
