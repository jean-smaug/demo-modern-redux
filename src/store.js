import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./modules/todo/todo.slice";
import { userSlice } from "./modules/user/user.slice";
import { userReducer } from "./modules/user-old/user.reducer";

export const store = configureStore({
  reducer: {
    users:
      process.env.REACT_APP_VERSION === "new" ? userSlice.reducer : userReducer,
    todos: todoSlice.reducer,
  },
});
