import React from "react";
import { Typography } from "@mui/material";

const Chapter_1: React.FC = () => {
  return (
    <div>
      <Typography variant="h6">Chapter 1: Let and Const</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        ES6 introduced <code>let</code> and <code>const</code> for block-scoped
        variable declarations.
      </Typography>
    </div>
  );
};

export default Chapter_1;
