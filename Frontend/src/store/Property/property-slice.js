import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "properties",
  initialState: {
    properties: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProperties(state, action) {
      state.properties = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const propertyActions = propertySlice.actions;
export default propertySlice;
