// slice

import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state, action) => { return state + 1 },
        decrement: () => { }
    }
});

// exporting reducer to be used in store
export const counterReducer = counterSlice.reducer;

// exporting actions to be used in components
export const { increment, decrement } = counterSlice.actions; // {increment , decrement}
