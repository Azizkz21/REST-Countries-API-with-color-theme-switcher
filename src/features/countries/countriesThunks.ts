import { createAsyncThunk } from "@reduxjs/toolkit";
import { countriesApi } from "../../api/countriesApi";
import type { Country } from "../../types/types";

export const fetchCountries = createAsyncThunk<
  Country[],
  void,
  { rejectValue: string }
>("countries/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const data = await countriesApi.getAll();
    return data;
  } catch {
    return rejectWithValue("Error loading countries");
  }
});
