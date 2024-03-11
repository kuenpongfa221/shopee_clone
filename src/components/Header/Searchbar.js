import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Box, Stack, Typography, Paper, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./SCSS/Searchbar.scss";
const Searchbar = () => {
  return (
    <Stack
      direction="row"
      spacing={10}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"}>
        <ShoppingBasketIcon sx={{ paddingTop: "0.125rem" }} />
        <Typography variant="h5">皮皮購物</Typography>
      </Box>
      <Box>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 800,
            height: 35,
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="新用戶獨享$100，再想免運吃到飽"
            inputProps={{ "aria-label": "searchInput" }}
          />

          <IconButton
            type="button"
            sx={{
              p: "10px",
              bgcolor: "#ed6c02",
              borderRadius: "0.25rem",
              height: 35,
              "&:hover": { opacity: "0.8" },
            }}
            aria-label="search"
            disableRipple={true}
          >
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
        </Paper>
        <Box>
          <Link to="/" className="linkStyle">
            居家 好物 小紅書
          </Link>
          <Link to="/" className="linkStyle">
            春節禮盒
          </Link>
          <Link to="/" className="linkStyle">
            蘋果防摔手機殼
          </Link>
          <Link to="/" className="linkStyle">
            冬季衣服
          </Link>
          <Link to="/" className="linkStyle">
            蘋果手機
          </Link>
          <Link to="/" className="linkStyle">
            壁貼
          </Link>
          <Link to="/" className="linkStyle">
            閨蜜手機殼
          </Link>
          <Link to="/" className="linkStyle">
            長夾
          </Link>
        </Box>
      </Box>
      <Box component="span" sx={{ mr: "5rem" }}>
        <Button variant="text">
          <ShoppingCartIcon sx={{ color: "white" }} />
        </Button>
      </Box>
    </Stack>
  );
};

export default Searchbar;
