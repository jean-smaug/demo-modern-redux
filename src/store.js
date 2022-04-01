import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./modules/todo/todo.slice";
import { userSlice } from "./modules/user/user.slice";
import { userReducer } from "./modules/user-old/user.reducer";

const userReducerMap = {
  new: userSlice.reducer,
  old: userReducer,
};

export const store = configureStore({
  reducer: {
    users: userReducerMap[process.env.REACT_APP_VERSION],
    todos: todoSlice.reducer,
  },
});
