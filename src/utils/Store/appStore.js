import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userInfo";
import browseMoviesReducer from "./Slices/browseMovies";
import searchToggleReducer from "./Slices/searchToggle";
import changeLanguageReducer from "./Slices/langChange";
import activePageReducer from "./Slices/activePage";
import genresReducer from "./Slices/genres";
import dialogActiveReducer from "./Slices/dialogActive"; //!this slice need checking

const appStore = configureStore({
    reducer: {
        userInfo: userReducer,
        moviesList: browseMoviesReducer,
        searchGPTToggle: searchToggleReducer,
        changeCurrLanguage: changeLanguageReducer,
        activePage: activePageReducer,
        genreID: genresReducer,
        dialogCurrValue: dialogActiveReducer, //! this slice need checking
    }
})

export default appStore;