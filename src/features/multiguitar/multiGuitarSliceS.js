import { createSlice } from '@reduxjs/toolkit';
import { MULTIGUITAR } from '../../app/shared/MULTIGUITAR';

const initialState = {
    mulitiguitarArray: MULTIGUITAR
};

const multiguitarSlice = createSlice({
    name: 'multiguitars',
    initialState
});

export const multiguitarReducer = multiguitarSlice.reducer;



export const selectFeaturedMulti= (state) => {
    return state.multiguitar.mulitiguitarArray.find((multiguitar) => multiguitar.featured);
};
