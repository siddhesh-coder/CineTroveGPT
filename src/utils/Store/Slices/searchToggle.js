import { createSlice } from "@reduxjs/toolkit"

const searchToggle = createSlice({
    name: "seachToggle",
    initialState: {
        toggle: false,
    },
    reducers: {
        toggleSearchGPT(state, action){
          state.toggle = action.payload;
        }
    }
})

export const { toggleSearchGPT } = searchToggle.actions;

export default searchToggle.reducer;