import {configureStore} from "@reduxjs/toolkit";
import adminSlice from "./Admin/adminSlice";



export const store = configureStore({
    reducer:{
     admin:adminSlice
    }

})