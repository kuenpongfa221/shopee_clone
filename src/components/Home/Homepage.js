import { Box, Container } from "@mui/material";
import React from "react";
import Banner from "./Banner/Banner";
import MainPart from "./MainPart/MainPart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <MainPart />
      <Footer />
    </Box>
  );
};

export default Homepage;
