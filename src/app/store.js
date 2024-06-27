import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
const store = configureStore({
    reducer: {
        // Add the RTK-Query API slice reducer
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        currentGenreOrCategory: genreOrCategoryReducer,

    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK-Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;