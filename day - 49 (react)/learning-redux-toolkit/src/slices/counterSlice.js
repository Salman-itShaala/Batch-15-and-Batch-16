// slice

import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => { return state + 1 },
        decrement: (state) => { return state - 1 },
        reset: () => { return 0 },
        increaseByValue: (state, action) => {
            return state + action.payload;
        }
    }
});

// exporting reducer to be used in store
export const counterReducer = counterSlice.reducer;

// exporting actions to be used in components
export const { increment, decrement, reset, increaseByValue } = counterSlice.actions; // {increment , decrement}
