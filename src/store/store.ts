import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";
import themeReducer from "../features/theme/themeSlice";
import detailReducer from "../features/details/detailsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    detail: detailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
