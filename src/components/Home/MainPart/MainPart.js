import { Box, Container } from "@mui/material";
import React from "react";
import Adevertise from "./Adevertise";
import Flagship from "./Flagship";
import SectionBelow from "./SectionBelow/SectionBelow";

const MainPart = () => {
  return (
    <Box>
      <Container
        sx={{
          "&.css-1oqqzyl-MuiContainer-root": { padding: "0" },
        }}
        maxWidth="lg"
      >
        <Adevertise />
        <Flagship />
        <SectionBelow />
      </Container>
    </Box>
  );
};

export default MainPart;
