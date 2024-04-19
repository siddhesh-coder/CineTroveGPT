import { createSlice } from "@reduxjs/toolkit";

const langChange = createSlice({
  name: "langChange",
  initialState: {
    currLanguage: "english",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = langChange.actions;

export default langChange.reducer;
