import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, fetchAsyncProducts } from "../../../redux/productSlice";
import "./SCSS/SearchResult.scss";
import ProductComponent from "./productComponent/ProductComponent";

const SearchResult = () => {
  const dispatch = useDispatch();
  const data = useSelector(getProducts);
  console.log("SearchResult: ", data);
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    // <div>
    //   {data ? (
    //     <>
    //       {data.map((datium) => (
    //         <h1>{datium.title}</h1>
    //       ))}
    //     </>
    //   ) : (
    //     <h1>...Loading</h1>
    //   )}
    // </div>
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default SearchResult;
