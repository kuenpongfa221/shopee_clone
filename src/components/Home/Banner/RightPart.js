import { Box } from "@mui/material";
import React from "react";
import banner1 from "../../../Img/banner/banner-1.jpg";
import banner2 from "../../../Img/banner/banner-2.jpg";
import { Link } from "react-router-dom";

const RightPart = () => {
  return (
    <Box
      ml=".3125rem"
      sx={{ flexGrow: "1", display: "flex", flexDirection: "column" }}
    >
      <img
        src={banner1}
        alt="banner-1.jpg"
        style={{
          objectFit: "fill",
          width: "100%",
          height: "120px",
        }}
        // style={{ width: "398.33px", height: "115px" }}
      />

      <img
        src={banner2}
        alt="banner-2.jpg"
        style={{
          objectFit: "fill",
          width: "100%",
          height: "120px",
          marginTop: ".3125rem",
        }}
        // style={{ width: "398.33px", height: "115px" }}
      />
    </Box>
  );
};

export default RightPart;
