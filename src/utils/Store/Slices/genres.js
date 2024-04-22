import { createSlice } from "@reduxjs/toolkit";

const genres = createSlice({
  name: "genres",
  initialState: {
    genreID: 35,
  },
  reducers: {
    setGenreID: (state, action) => {
      state.genreID = action.payload;
    },
  },
});

export const { setGenreID } = genres.actions;

export default genres.reducer;
