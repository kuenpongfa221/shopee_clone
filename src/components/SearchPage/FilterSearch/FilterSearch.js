import { Box, Typography } from "@mui/material";
import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const FilterSearch = () => {
  return (
    <Box
      sx={{
        flex: "0 0 11.875rem",
        display: "flex",
        margin: "0 1.25rem 1.25rem 0",
      }}
    >
      <FilterAltIcon />
      <Typography variant="h6">條件篩選</Typography>
    </Box>
  );
};

export default FilterSearch;
