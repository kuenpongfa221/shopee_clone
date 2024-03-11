import { Box } from "@mui/material";
import React from "react";
import bannerImage from "../../../../Img/mainPart/sectionBelow/superBrandDay/超級品牌日.png";
import { Link } from "react-router-dom";

const SuperBrandDay = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Link to="#">
        {" "}
        <img
          src={bannerImage}
          alt="超級品牌日"
          style={{ width: "100%", position: "absolute" }}
        />
      </Link>
    </Box>
  );
};

export default SuperBrandDay;
