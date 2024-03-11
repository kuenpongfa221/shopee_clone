import { Box } from "@mui/material";
import React from "react";
import HeaderTwo from "../HeaderTwo/HeaderTwo";
import MainPartTwo from "../MainPartTwo/MainPartTwo";
import OtherInformation from "../../Footer/OtherInformation";
const SignUp = () => {
  return (
    <Box>
      <HeaderTwo whichForm={"signUp"} />
      <MainPartTwo whichForm={"signUp"} />
      <OtherInformation />
    </Box>
  );
};

export default SignUp;
