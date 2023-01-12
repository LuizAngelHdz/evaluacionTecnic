import { configureStore } from "@reduxjs/toolkit";
import detailSate from '../features/sates/sates'


const store = configureStore({
    reducer:{
        state:detailSate
    }
})

export default store