import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter();

export const todoSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState(),
});

export const usersActions = {
  ...todoSlice.actions,
};
