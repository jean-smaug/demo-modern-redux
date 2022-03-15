import { FETCH_USER_START, FETCH_USER_SUCCESS } from "./user.action";

const initialState = {
  users: [],
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return { ...state, isLoading: true };

    case FETCH_USER_SUCCESS:
      // Forgot to handle side effect
      // return { ...state, users: action.payload };
      return { ...state, users: action.payload, isLoading: false };

    default:
      return state;
  }
};
