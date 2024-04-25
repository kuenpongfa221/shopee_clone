import {
  Box,
  IconButton,
  InputBase,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("all");
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate(`/search/${searchValue}`);
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ height: "100px", backgroundColor: "white" }}
    >
      <Box display={"flex"}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
          }}
        >
          <ShoppingBasketIcon
            sx={{
              paddingTop: "0.125rem",
              color: "#ed6c02",
              fontSize: "3rem",
              marginLeft: "50px",
            }}
          ></ShoppingBasketIcon>
          <Typography
            sx={{
              color: "#ed6c02",
              fontSize: "1.5rem",
              fontWeight: "700",
              lineHeight: "2",
              whiteSpace: "pre-line",
            }}
          >
            皮皮購物 | 購物車
          </Typography>
        </Link>
      </Box>

      <Box display={"flex"}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 800,
            height: 35,
            marginRight: "50px",
            border: "2px solid #ed6c02",
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="免費吃到飽 商城蝦幣25%回饋"
            InputProps={{ "aria-label": "searchInput" }}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />

          <IconButton
            type="button"
            sx={{
              p: "10px",
              bgcolor: "#ed6c02",
              borderRadius: "0.25rem",
              height: "35px",
              marginRight: "-5px",
              "&:hover": { opacity: "0.8" },
            }}
            aria-label="search"
            disableRipple={true}
            onClick={onSubmit}
          >
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
        </Paper>
      </Box>
    </Stack>
  );
}

export default SearchBar;
