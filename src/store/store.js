import { configureStore } from "@reduxjs/toolkit";
import gamesDataReducer from "./slices/gamesDataSlice";
import modalReducer from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    gamesData: gamesDataReducer,
    modal: modalReducer,
  },
});

export default store;