import {configureStore} from "@reduxjs/toolkit";
import publicReducer from "./modules/file";

const store = configureStore(
{
    reducer: {
        publicFile: publicReducer,
    }
})

export default store;