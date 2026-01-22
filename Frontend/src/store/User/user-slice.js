import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    errors: [],
  },
  reducers: {
    getSignupRequest(state) {
      state.loading = true;
    },
    getSignupDetails(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    getLoginRequest(state) {
      state.loading = true;
    },
    getLoginDetails(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    getCurrentUserRequest(state) {
      state.loading = true;
    },
    getCurrentUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    getUpdateUserRequest(state) {
      state.loading = true;
    },
    getPasswordRequest(state) {
      state.loading = true;
    },
    getPasswordSuccess(state) {
      state.loading = false;
    },
    getError(state, action) {
      state.errors = action.payload;
      state.loading = false;
    },
    getLogout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    clearErrors(state) {
      state.errors = [];
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
