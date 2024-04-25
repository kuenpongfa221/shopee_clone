import React from "react";
import Navbar from "../../Header/Navbar";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
} from "@mui/material";
import SearchBar from "./SearchBar";

function HeaderThree() {
  return (
    <Box>
      <AppBar position="static" color="warning">
        <Container>
          <Typography variant="h6" component="div">
            <Navbar />
          </Typography>
        </Container>
      </AppBar>
      <SearchBar />
    </Box>
  );
}

export default HeaderThree;
