import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auths",
  initialState: [],
  reducers: {
    signUp: (state, action) => {
      const newUser = {
        userName: action.payload.userName,
        email: action.payload.email,
        password: action.payload.password,
      };
      state.push(newUser);
    },
  },
});

export const { signUp } = authSlice.actions;

export default authSlice.reducer;
