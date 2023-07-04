// initial state ----------------------------------------------------

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  data: [],
  loading: false,
};
// ----------------------------------------------------

// actions
// ----------------------------------------------------

// ----------------------------------------------------

// slice // reducer
// ----------------------------------------------------

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    // actions
    setList(state, action) {
      console.log({ action });
      // {type: '', payload}
      state.data = action.payload;
    },
  },
  // extraReducers: {}
});
// ----------------------------------------------------

export const { setList } = products.actions;
// export const setList = products.actions.setList;

export default products.reducer;
