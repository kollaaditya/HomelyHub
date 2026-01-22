import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {
    setBookings(state, action) {
      state.bookings = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export default bookingSlice;
