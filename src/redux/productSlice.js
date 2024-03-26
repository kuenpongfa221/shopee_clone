import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(fetchAsyncProducts, (state, action) => {
      if (action.type === "products/fetchAsyncProducts/pending") {
        console.log("Pending");
      }
      if (action.type === "products/fetchAsyncProducts/fulfilled") {
        console.log("Fetched products successfully");
        console.log("Action: ", action);
        return { ...state, products: action.payload };
      }
    });
  },
});

export const getProducts = (state) => state.products.products;
export default productSlice.reducer;
