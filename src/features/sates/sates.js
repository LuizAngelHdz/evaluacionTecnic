import { createSlice } from "@reduxjs/toolkit";

export const detailSate = createSlice({
    name:'detailStale',
    initialState:{idSate:''},
    reducer:{
        updateId: (state, action) =>{console.log("aaaaaa", state,action)}
    },
})

console.log(".......updateId", detailSate)
export const {updateId} = detailSate.actions

export default detailSate.reducer