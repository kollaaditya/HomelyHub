import { createSlice } from "@reduxjs/toolkit";

const accomodationSlice = createSlice({
  name: "accomodation",
  initialState: {
    accommodations: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAccommodations(state, action) {
      state.accommodations = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export default accomodationSlice;
