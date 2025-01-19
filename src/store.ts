import { configureStore } from "@reduxjs/toolkit";
import overviewReducer from "./features/overview/overviewSlice";

export const store = configureStore({
  reducer: {
    overview: overviewReducer,
  },
});
