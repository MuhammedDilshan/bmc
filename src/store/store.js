import { combineReducers } from "@reduxjs/toolkit";
import creatorsSlice from "./slices/creatorsSlice";

export const appReducer = combineReducers({
  creators: creatorsSlice,
});
