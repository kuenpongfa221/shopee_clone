import { Box } from "@mui/material";
import React from "react";
import HeaderTwo from "../HeaderTwo/HeaderTwo";
import MainPartTwo from "../MainPartTwo/MainPartTwo";
import OtherInformation from "../../Footer/OtherInformation";
const Login = () => {
  return (
    <Box>
      <HeaderTwo whichForm={"login"} />
      <MainPartTwo whichForm={"login"} />
      <OtherInformation />
    </Box>
  );
};

export default Login;
