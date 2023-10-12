import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";
import movieSlice from "./slices/movieSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        movies: movieSlice
    }
});

export default store;