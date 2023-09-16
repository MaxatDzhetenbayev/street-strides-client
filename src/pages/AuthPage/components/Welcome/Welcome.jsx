import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import welcomeImage from "../../../../assets/welcome.gif";
export const Welcome = () => {
  const matches_md = useMediaQuery("(min-width: 980px)");
  const matches_xs = useMediaQuery("(min-width: 560px)");

  return (
    <Box>
      <img
        src={welcomeImage}
        width="100%"
        height={matches_md ? "700px" : matches_xs ?  "450px" : "250"}
        alt=""
      />
    </Box>
  );
};
