import React from "react";
import Marketing from "./Marketing";
import { Box, Container } from "@mui/material";
import Category from "./Category";
import OtherInformation from "./OtherInformation";

const Footer = () => {
  return (
    // <Container>
    <Box component="span">
      <Marketing />
      <Category />
      <OtherInformation />
    </Box>
    // </Container>
  );
};

export default Footer;
