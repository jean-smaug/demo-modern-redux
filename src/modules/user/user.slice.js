import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

// INIT
const userAdapter = createEntityAdapter();
const initialState = {
  ...userAdapter.getInitialState(),
  status: "idle", // "idle" | "pending" | "success" | "failure"
  error: null,
};

// SELECTORS

const selectStatus = ({ users }) => {
  return users.status;
};

export const userSelector = { ...userAdapter.getSelectors(), selectStatus };

// ASYNC THUNKS
const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });

    return await response.json();
  },
  {
    condition: (_arg, api) => {
      const status = selectStatus(api.getState());
      return status !== "pending" && status !== "success";
    },
  }
);

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
