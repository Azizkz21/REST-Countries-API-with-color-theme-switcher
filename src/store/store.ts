import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";
import themeReducer from "../features/theme/themeSlice";
import detailReducer from "../features/details/detailsSlice";

export const store = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      countries: countriesReducer,
      detail: detailReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
