import { createSlice } from "@reduxjs/toolkit";
import type { DetailCountry } from "../../types/types";
import { fetchBorderNames, fetchDetails } from "./detailsThunks";

type DetailInfo = {
  info: DetailCountry | null;
  borderNames: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: DetailInfo = {
  info: null,
  borderNames: [],
  status: "idle",
  error: null,
};

const detailsSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  selectors: {
    selectDetailsInfo: (state) => state.info,
    selectDetailsStatus: (state) => state.status,
    selectBorderNames: (state) => state.borderNames,
    selectDetailsError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.borderNames = [];
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.info = action.payload[0] ?? null;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(fetchBorderNames.fulfilled, (state, action) => {
        state.borderNames = action.payload;
      })
      .addCase(fetchBorderNames.rejected, (state, action) => {
        state.error = action.payload ?? "Unknown error";
        state.borderNames = [];
      });
  },
});

export const { selectDetailsInfo,selectBorderNames, selectDetailsStatus, selectDetailsError } =
  detailsSlice.selectors;
export default detailsSlice.reducer;
