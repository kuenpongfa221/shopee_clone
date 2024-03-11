import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";
import gamingChair from "../../../../../Img/shopMall15Days/下單再抽電競椅.jpg";
import bedEdge from "../../../../../Img/shopMall15Days/床沿護邊不易塌陷.jpg";
import bedding from "../../../../../Img/shopMall15Days/春日好眠床寢優惠.jpg";
import oneForty from "../../../../../Img/shopMall15Days/最高現折$140.jpg";
import gold from "../../../../../Img/shopMall15Days/金采龍鳳5折起.jpg";
import scalpCleanse from "../../../../../Img/shopMall15Days/頭皮淨化組合.jpg";
import singleLensReflex from "../../../../../Img/shopMall15Days/滿額抽萬元單眼.jpg";
import leather from "../../../../../Img/shopMall15Days/客製化禮物推薦.jpg";

const ListProducts = () => {
  const products = [
    { img: gamingChair, text: "下單再抽電競椅" },
    { img: bedEdge, text: "床沿護邊不易塌陷" },
    { img: bedding, text: "春日好眠床寢優惠" },
    { img: oneForty, text: "最高現折$140" },
    { img: gold, text: "金采龍鳳5折起" },
    { img: scalpCleanse, text: "No.1頭皮淨化組合" },
    { img: singleLensReflex, text: "滿額抽萬元單眼" },
    { img: leather, text: "客製化禮物推薦" },
  ];
  return (
    <Box>
      <List
        disablePadding
        sx={{
          height: "472px",
          display: "block",
          columnWidth: "180px",
          columnGap: "11px",
        }}
      >
        {products.map((product, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "236px",
                width: "180px",
                padding: "10px",
                position: "relative",
                //   "&.MuiButtonBase-root:hover": {
                //     bgcolor: "transparent",
                //   },
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  width: "100%",
                }}
              ></Box>
              <Typography
                color="#d0011b"
                sx={{ position: "absolute", left: "33px", bottom: "35px" }}
              >
                {product.text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListProducts;
