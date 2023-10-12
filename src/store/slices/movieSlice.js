import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: { data: [] },
    reducers: {

        addToWatchList: (state, action) => {
            state.data = action.payload;
        }
    }
});

export default movieSlice.reducer;
export const { addToWatchList } = movieSlice.actions;