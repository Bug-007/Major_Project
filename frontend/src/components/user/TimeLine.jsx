import React from "react";
import Box from "@mui/material/Box";
import Cards from "./Cards";
// import styled from "@emotion/styled";

const TimelLine = () => {
  return (
    <Box component={"div"} sx={{ width: "100%"}}>
      <Cards />
      <Cards />
      <Cards />
    </Box>
  );
};

export default TimelLine;
