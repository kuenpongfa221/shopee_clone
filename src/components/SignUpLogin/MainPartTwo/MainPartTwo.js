import { Box, Container } from "@mui/material";
import React from "react";
import goddessShopping from "../../../Img/signUpLogin/goddessShopping.jpg";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";

const MainPartTwo = (props) => {
  return (
    <Box bgcolor="rgb(238, 77, 45)">
      <Box
        sx={{
          backgroundImage: `url(${goddessShopping})`,
          height: "600px",
          minHeight: "600px",
          width: "1040px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        {props.whichForm == "signUp" && <SignUpForm></SignUpForm>}
        {props.whichForm == "login" && <LoginForm></LoginForm>}
      </Box>
    </Box>
  );
};

export default MainPartTwo;
