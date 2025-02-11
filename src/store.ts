import { configureStore } from "@reduxjs/toolkit";
import { overviewApi } from "./services/overviewApi";

// import overviewReducer from "./features/Overview/overviewSlice";
import overviewReducer from "./features/overview/overviewSlice";

export const store = configureStore({
  reducer: {
    overview: overviewReducer,
    [overviewApi.reducerPath]: overviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(overviewApi.middleware),
});
