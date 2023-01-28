import { createSlice } from '@reduxjs/toolkit';
import { GUITARSTAT } from '../../app/shared/GUITARSTAT';

const initialState = {
    guitarstatArray: GUITARSTAT
};

const guitarstatsSlice = createSlice({
    name: 'guitarstats',
    initialState,
    reducers: {
        addGuitarStat: (state, action) => {
        console.log('addGuitarStat action.payload:', action.payload);
        console.log('addGuitarStat state.guitarstatArray: ', state.guitarstatArray);
        const newGuitarStat = {
            id: state.guitarstatArray.length + 1,
            ...action.payload
        };
        state.guitarstatArray.push(newGuitarStat);
    }

    }
});

export default guitarstatReducer = guitarstatsSlice.reducer;

export const {addGuitarStat} = guitarstatsSlice.actions;


export const selectStatByGuitarId = (state) => (guitarid) => {
    return state.guitarstats.guitarstatArray.filter(
        (guitarstat) => guitarstat.guitarid === parseInt(guitarid)
    );
};