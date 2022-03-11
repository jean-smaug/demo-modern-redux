import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./modules/todo/todo.slice";
import { userSlice } from "./modules/user/user.slice";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    todos: todoSlice.reducer,
  },
});
