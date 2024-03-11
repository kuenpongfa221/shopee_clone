import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const HeaderTwo = (props) => {
  return (
    <Box bgcolor={"white"}>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ height: "84px" }}
        >
          <Box display={"flex"} alignItems={"flex-end"}>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <ShoppingBasketIcon
                sx={{ fontSize: "3rem", color: "#ee4d2d" }}
              ></ShoppingBasketIcon>
              <Typography
                variant="h5"
                mr={"10px"}
                mt={"0.5rem"}
                fontSize="2rem"
                color="#ee4d2d"
              >
                皮皮購物
              </Typography>
            </Link>

            {props.whichForm == "signUp" && (
              <Typography fontSize={"1.5rem"}>註冊</Typography>
            )}
            {props.whichForm == "login" && (
              <Typography fontSize={"1.5rem"}>登入</Typography>
            )}
          </Box>
          <Link to="#" style={{ color: "#ee4d2d", textDecoration: "none" }}>
            需要幫助?
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderTwo;
