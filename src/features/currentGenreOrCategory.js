import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreOrCategoryName: '',
        page: 1,
        searchQuery: ''
    },
    reducers: {
        selectGenereOrCategory: (state, action) => {
            //state.genreOrCategoryName = 
            console.log(state, action);
        }
    }
});
export const { selectGenereOrCategory } = genreOrCategory;
export default genreOrCategory.reducer;