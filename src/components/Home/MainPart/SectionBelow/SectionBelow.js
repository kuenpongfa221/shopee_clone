import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import CategoryImage from "./CategoryImage.js";
import FlashSale from "./FlashSale.js";
import SuperBrandDay from "./SuperBrandDay.js";
import ShopMallFifteenDays from "./ShopMallFifteenDays/ShopMallFifteenDays.js";

const SectionBelow = () => {
  // console.log(categoryImages);
  // console.log(categoryImages[0].image);
  return (
    <Box sx={{ minHeight: "50rem" }}>
      {/* Category */}
      <Box sx={{ minHeight: "18.875rem", mt: "1.25rem", bgcolor: "#fff" }}>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "3.75rem",
            borderBottom: "1px solid rgba(0, 0, 0, .05)",
            padding: "0 1.25rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              color: "rgba(0, 0, 0, .54)",
              fontWeight: 500,
            }}
          >
            分類
          </Typography>
        </Box>

        <Box>
          <List
            disablePadding
            sx={{
              height: "302px",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <CategoryImage />
          </List>
        </Box>
      </Box>
      {/* 限時特賣 */}
      <Box pt="1.25rem">
        <FlashSale />
      </Box>
      {/* 超級品牌日 */}
      <Box mt="20px" height={"110px"}>
        <SuperBrandDay />
      </Box>
      {/* 商城 15天鑑賞期 */}
      <Box mt="1.25rem">
        <ShopMallFifteenDays></ShopMallFifteenDays>
      </Box>
      {/* 熱門商品 */}
      <Box></Box>
    </Box>
  );
};

export default SectionBelow;
