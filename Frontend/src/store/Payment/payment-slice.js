import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payments: [],
    loading: false,
    error: null,
  },
  reducers: {
    setPayments(state, action) {
      state.payments = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export default paymentSlice;
