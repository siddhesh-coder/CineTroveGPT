import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userInfo";
import browseMoviesReducer from "./Slices/browseMovies";
import searchToggleReducer from "./Slices/searchToggle";
import changeLanguageReducer from "./Slices/langChange";
import activePageReducer from "./Slices/activePage";

const appStore = configureStore({
    reducer: {
        userInfo: userReducer,
        moviesList: browseMoviesReducer,
        searchGPTToggle: searchToggleReducer,
        changeCurrLanguage: changeLanguageReducer,
        activePage: activePageReducer
    }
})

export default appStore;