import { configureStore } from "@reduxjs/toolkit";
import detailSate from '../features/sates/sates'

console.log("----satteReducer", detailSate)

const store = configureStore({
    reducer:{
        state:detailSate
    }
})

export default store