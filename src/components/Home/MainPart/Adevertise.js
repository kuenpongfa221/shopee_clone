import { Box, Container } from "@mui/material";
import React from "react";
import advertise from "../../../Img/mainPart/蝦皮購物_免運吃到飽.jpg";

const Adevertise = () => {
  return (
    <Box mt="20px" p={0} sx={{ fontSize: "0px" }}>
      <img
        src={advertise}
        alt="advertise"
        style={{
          height: "110px",
          width: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Adevertise;
