import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
export default configureStore({
  reducer: { auths: authReducer },
});
