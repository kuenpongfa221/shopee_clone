import React from "react";
import { CarouselExe } from "./Carousel";
import { Box, Container } from "@mui/material";
import RightPart from "./RightPart";
import DownPart from "./DownPart";

const Banner = () => {
  return (
    <Box
      p="30px"
      bgcolor={"white"}
      sx={{ boxShadow: "0 1px 1px rgba(0, 0, 0, .05)" }}
    >
      <Container>
        <Box display={"flex"}>
          <CarouselExe />
          <RightPart />
        </Box>
        <Box>
          <DownPart />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
