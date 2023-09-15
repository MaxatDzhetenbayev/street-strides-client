import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import welcomeImage from "../../../../assets/welcome.gif";
export const Welcome = () => {
  const matches_md = useMediaQuery("(min-width: 980px)");

  return (
    <Box>
      <img
        src={welcomeImage}
        width="100%"
        height={matches_md ? "700px" : "450px"}
        alt=""
      />
    </Box>
  );
};
