import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCountries } from "./countriesThunks";
import type { Country } from "../../types/types";
import type { RootState } from "../../store/store";

type CountriesState = {
  list: Country[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;

  search: string;
  region: string;
};

const initialState: CountriesState = {
  list: [],
  status: "idle",
  error: null,
  search: "",
  region: "",
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    resetFilters: (state) => {
      state.search = "";
      state.region = "";
    },
  },
  selectors: {
    selectCountriesAll: (state) => state.list,
    selectCountriesStatus: (state) => state.status,
    selectCountriesError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const {
  selectCountriesAll,
  selectCountriesStatus,
  selectCountriesError,
} = countriesSlice.selectors;
export const { setSearch, setRegion, resetFilters } = countriesSlice.actions;
export default countriesSlice.reducer;

const selectCountriesState = (state: RootState) => state.countries;

export const selectVisibleCountriesMemo = createSelector(
  [selectCountriesState],
  (state) => {
    const q = state.search.trim().toLowerCase();
    const region = state.region;
    if (q === "" && region === "") return state.list;

    return state.list.filter((country) => {
      const okSearch =
        q === "" || country.name.common.toLowerCase().includes(q);
      const okRegion = region === "" || country.region === region;
      return okSearch && okRegion;
    });
  },
);
