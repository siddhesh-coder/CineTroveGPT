import { createSlice } from "@reduxjs/toolkit";

const dialogActive = createSlice({
  name: "dialogActive",
  initialState: {
    dialogValue: null,
    id: null,
  },
  reducers: {
    addDialogSize: (state, action) => {
      state.dialogValue = action.payload.size;
      state.id = action.payload.id;
      console.log(state);
    },
  },
});

export const { addDialogSize } = dialogActive.actions;

export default dialogActive.reducer;
