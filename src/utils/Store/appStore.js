import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userInfo";
import nowPlayingMoviesReducer from "./Slices/nowPlaying";
import searchToggleReducer from "./Slices/searchToggle";
import changeLanguageReducer from "./Slices/langChange";

const appStore = configureStore({
    reducer: {
        userInfo: userReducer,
        movies: nowPlayingMoviesReducer,
        searchGPTToggle: searchToggleReducer,
        changeCurrLanguage: changeLanguageReducer,
    }
})

export default appStore;