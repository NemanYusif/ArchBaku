import { configureStore } from "@reduxjs/toolkit";
import idReducer from "../Slice/index";

export const store = configureStore({
  reducer: {
    id: idReducer,
  },
});
