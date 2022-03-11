import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

// INIT
const userAdapter = createEntityAdapter();
const initialState = {
  ...userAdapter.getInitialState(),
  status: "idle",
  error: null,
};

// SELECTORS
export const userSelector = userAdapter.getSelectors();

// ASYNC THUNKS
const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await fetch(
    "http://jsonplaceholder.typicode.com/users/23121412"
  );

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return await response.json();
});

// SLICE
export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled.type, (state, action) => {
      userAdapter.addMany(state, action.payload);
      state.status = "success";
    });

    builder.addCase(fetchUsers.pending.type, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchUsers.rejected.type, (state, action) => {
      state.status = "failure";
      state.error = action.error;
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  fetchUsers,
};
