import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import OtherInformation from "../Footer/OtherInformation";
import Header from "../Header/Header";
import SearchResult from "./SearchResult/SearchResult";
import FilterSearch from "./FilterSearch/FilterSearch";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts, getProducts } from "../../redux/productSlice";

const SearchPage = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAsyncProducts());
  // }, [dispatch]);
  return (
    <Box>
      <Header />
      <Container>
        <Box display={"flex"} mt={"1.25rem"}>
          <FilterSearch />
          <SearchResult />
        </Box>
      </Container>
      <OtherInformation />
    </Box>
  );
};

export default SearchPage;
