import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";
import carousel6 from "../../../../../Img/carousel_shopMall15Days/carousel-6.jpg";
import carousel7 from "../../../../../Img/carousel_shopMall15Days/carousel-7.jpg";
import carousel8 from "../../../../../Img/carousel_shopMall15Days/carousel-8.jpg";

// import "./SCSS/Carousel.scss";
import { Link } from "react-router-dom";

export function CarouselExe(props) {
  const items = [carousel6, carousel7, carousel8];
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          padding: "5px",
          margin: "0px",
        },
      }}
      activeIndicatorIconButtonProps={{ style: { color: "orange" } }}
      animation="slide"
      // sx={{ width: "900px", height: "235.02px" }}
      sx={{ width: "100%", height: "100%", flexGrow: "2" }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

//Carousel Item
function Item(props) {
  return (
    <Paper p={0}>
      <Box sx={{ flexGrow: "2" }}>
        <img
          src={props.item}
          alt="@@"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Box>
    </Paper>
  );
}
