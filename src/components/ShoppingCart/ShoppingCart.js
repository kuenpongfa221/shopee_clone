import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import HeaderThree from "./HeaderThree.j/HeaderThree";
import Footer from "../Footer/Footer";
import OtherInformation from "../Footer/OtherInformation";

function ShoppingCart() {
  return (
    <Box>
      <HeaderThree />
      <OtherInformation />
    </Box>
  );
}

export default ShoppingCart;
