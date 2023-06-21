// initial state
// ----------------------------------------------------

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const initialState = {
  data: {},
  loading: false,
};
// ----------------------------------------------------

// actions
// ----------------------------------------------------
export const getUser = createAsyncThunk("getUser", async function (str) {
  const data = await api.getUserInfo();
  return data;
});

// export const updateUser = createAsyncThunk("updateUser", async function (avatar) {
//     const data = await api.updateUserAvatar(data);
//     return data;
//   });
// ----------------------------------------------------
// slice // reducer
// ----------------------------------------------------

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getUser.pending, (state, action) => {
    //     state.loading = true
    // });
    builder.addCase(getUser.fulfilled, (state, action) => {
        // state.loading = false;
        state.data = action.payload
    });
    // builder.addCase(getUser.rejected, (state, action) => {
    //      state.loading = false;
    //      state.data = action.payload
    //     state.errors = [...errors, ]
    // });
    // builder.addCase((updateUser) => {});
  },
});
// ----------------------------------------------------

export default userSlice.reducer;
