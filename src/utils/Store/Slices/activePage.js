import { createSlice } from "@reduxjs/toolkit";

const activePage = createSlice({
  name: "activePage",
  initialState: {
    active: 1,
  },
  reducers: {
    setActivePage: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActivePage } = activePage.actions;

export default activePage.reducer;
