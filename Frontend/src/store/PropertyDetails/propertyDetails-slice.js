import { createSlice } from "@reduxjs/toolkit";

const propertyDetailsSlice = createSlice({
  name: "propertyDetails",
  initialState: {
    details: {},
    loading: false,
    error: null,
  },
  reducers: {
    setPropertyDetails(state, action) {
      state.details = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export default propertyDetailsSlice;
