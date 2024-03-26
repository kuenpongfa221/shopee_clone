import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import productsReducer from "./productSlice";
export default configureStore({
  reducer: { auths: authReducer, products: productsReducer },
});
