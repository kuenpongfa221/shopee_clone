import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="warning">
      <Toolbar>
        <Container color="warning">
          <Typography variant="h6" component="div">
            <Navbar />
            <Searchbar />
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
