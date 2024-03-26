import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.products.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Box className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <Box className="ui link cards">
            <Box className="card">
              <Box className="image">
                <img src={image} alt={title} />
              </Box>
              <Box className="content">
                <Box className="header">{title}</Box>
                <Box className="meta price">$ {price}</Box>
                <Box className="meta">{category}</Box>
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
