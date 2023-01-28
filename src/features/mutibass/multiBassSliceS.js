import { createSlice } from "@reduxjs/toolkit";
import { MULTIBASS } from "../../app/shared/MULTIBASS";


const initialState = {
    mulitibassArray: MULTIBASS
};

const multibassSlice = createSlice({
    name: 'multibasses',
    initialState
});

export const multibassReducer = multibassSlice.reducer;

export const selectFeaturedMultiBass= (state) => {
    return state.multibasses.mulitibassArray.find((multibass) => multibass.featured);
};
