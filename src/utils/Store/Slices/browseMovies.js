import { createSlice } from "@reduxjs/toolkit";

const browseMovies = createSlice({
  name: "browseMovies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = browseMovies.actions;

export default browseMovies.reducer;
