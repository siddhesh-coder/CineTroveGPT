import { createSlice } from "@reduxjs/toolkit";

const nowPlaying = createSlice({
  name: "nowPlaying",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = nowPlaying.actions;

export default nowPlaying.reducer;
