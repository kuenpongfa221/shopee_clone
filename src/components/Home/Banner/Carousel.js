import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";
import carousel1 from "../../../Img/carousel/carousel-1.jpg";
import carousel2 from "../../../Img/carousel/carousel-2.jpg";
import carousel3 from "../../../Img/carousel/carousel-3.jpg";
import carousel4 from "../../../Img/carousel/carousel-4.jpg";
import carousel5 from "../../../Img/carousel/carousel-5.jpg";
import "./SCSS/Carousel.scss";
import { Link } from "react-router-dom";

export function CarouselExe(props) {
  const items = [carousel1, carousel2, carousel3, carousel4, carousel5];
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
