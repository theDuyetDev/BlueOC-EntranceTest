import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers";

const store = configureStore({
  reducer: postReducer,
});

export default store;
