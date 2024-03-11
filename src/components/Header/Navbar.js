import { Box, Typography, Divider, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box display={"flex"}>
        <Typography variant="h6" fontSize="0.8125rem" padding="4px">
          賣家中心
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography variant="h6" fontSize="0.8125rem" padding="4px">
          開始隨拍即賣摟!
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography variant="h6" fontSize="0.8125rem" padding="4px">
          下載
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography variant="h6" fontSize="0.8125rem" padding="4px">
          追蹤我們
        </Typography>
        <FacebookIcon sx={{ width: "1rem", mt: "1px" }} />
        <InstagramIcon sx={{ width: "1rem", mt: "1px" }} />
      </Box>
      <Box display="flex">
        <NotificationsIcon sx={{ width: "1rem", mt: "1px" }} />
        <Typography variant="h6" fontSize="0.8125rem" padding="4px">
          通知總覽
        </Typography>
        <HelpIcon sx={{ width: "1rem", mt: "1px" }} />
        <Typography variant="h6" fontSize="0.8125rem" padding="4px">
          幫助中心
        </Typography>
        <LanguageIcon sx={{ width: "1rem", mt: "1px" }} />
        <Typography variant="h6" fontSize="0.8125rem" padding="4px">
          繁體中文
        </Typography>
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            padding: "0",
            height: "28.8px",
            color: "white",
          }}
        >
          <Typography variant="h6" fontSize="0.8125rem" padding="4px">
            註冊
          </Typography>
        </Link>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            padding: "0",
            height: "28.8px",
            color: "white",
          }}
        >
          <Typography variant="h6" fontSize="0.8125rem" padding="4px">
            登入
          </Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default Navbar;
