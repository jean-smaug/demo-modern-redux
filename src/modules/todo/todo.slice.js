import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();

const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return await response.json();
});

const initialState = {
  ...todoAdapter.getInitialState(),
  status: "idle", // "idle" | "pending" | "success" | "failure"
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending.type, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchTodos.rejected.type, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });

    builder.addCase(fetchTodos.fulfilled.type, (state, action) => {
      state.status = "fulfilled";
      todoAdapter.addMany(state, action.payload);
    });
  },
});

export const todosActions = {
  ...todoSlice.actions,
  fetchTodos,
};
