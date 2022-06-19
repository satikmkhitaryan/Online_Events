import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../reduxToolkit/slices/userSlice'


export const rootReducer = combineReducers({
    user: userReducer
})