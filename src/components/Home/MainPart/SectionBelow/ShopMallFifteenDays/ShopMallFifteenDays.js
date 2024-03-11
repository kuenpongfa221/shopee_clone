import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import fifteenDays from "../../../../../Img/mainPart/sectionBelow/shopMallFifteenDays/fifteenDays.png";
import realThings from "../../../../../Img/mainPart/sectionBelow/shopMallFifteenDays/realThings.png";
import safeReturn from "../../../../../Img/mainPart/sectionBelow/shopMallFifteenDays/safeReturn.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CarouselExe } from "./CarouselTwo";
import ListProducts from "./ListProducts";
const ShopMallFifteenDays = () => {
  const headers = [
    {
      img: fifteenDays,
      text: "15天鑑賞期",
    },
    {
      img: safeReturn,
      text: "蝦皮安心退",
    },
    {
      img: realThings,
      text: "正品保障",
    },
  ];
  return (
    <Box bgcolor={"white"} mb="2rem">
      <Box
        sx={{
          height: "3.75rem",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(0, 0, 0, .05)",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h6" fontSize={"1.0625rem"} color={"#d0011b"}>
              蝦皮商城
            </Typography>
          </Link>
          <Box
            ml="15px"
            pl="15px"
            sx={{ borderLeft: "1px solid #d8d8d8", display: "flex" }}
          >
            {headers.map((header, index) => (
              <Box
                mr="15px"
                sx={{
                  display: "flex",
                  height: "1.25rem",
                  alignItems: "center",
                }}
                key={index}
              >
                <img
                  src={header.img}
                  alt="fifteenDays"
                  style={{
                    width: "1.0625rem",
                    height: "1.0625rem",
                    marginRight: "6px",
                  }}
                />
                <Typography variant="h6" fontSize={"1rem"} fontWeight={"400"}>
                  {header.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Link
            to="#"
            style={{
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#d0011b", height: "1.25rem" }}>
              查看全部
            </Typography>
            <ArrowForwardIosIcon
              sx={{ width: "1.125rem", height: "1.125rem", color: "#d0011b" }}
            ></ArrowForwardIosIcon>
          </Link>
        </Box>
      </Box>
      <Box display={"flex"}>
        <Box
          sx={{ width: "390px", height: "452px", padding: "10px 0 10px 10px" }}
        >
          <CarouselExe></CarouselExe>
        </Box>
        <Box>
          <ListProducts></ListProducts>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopMallFifteenDays;
