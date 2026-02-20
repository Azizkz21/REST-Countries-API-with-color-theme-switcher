import { createAsyncThunk } from "@reduxjs/toolkit";
import type { DetailCountry } from "../../types/types";
import { countriesApi } from "../../api/countriesApi";

export const fetchDetails = createAsyncThunk<
  DetailCountry[],
  string,
  { rejectValue: string }
>("details/fetch", async (name, { rejectWithValue }) => {
  try {
    return await countriesApi.getByName(name);
  } catch {
    return rejectWithValue("Error loading country details");
  }
});

export const fetchBorderNames = createAsyncThunk<
  string[],
  string[],
  { rejectValue: string }
>("details/fetchBorderNames", async (codes, { rejectWithValue }) => {
  try {
    if (codes.length === 0) return [];

    const data = await countriesApi.getByCode(codes);
    return data.map((c) => c.name.common);
  } catch {
    return rejectWithValue("Error loading border countries");
  }
});
