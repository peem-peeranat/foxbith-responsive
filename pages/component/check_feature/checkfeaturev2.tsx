import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CheckBoxV2() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Box
          sx={{
            width: "542px",
            backgroundColor: "white",
            display: "flex",
            px: "24px",
            py: "14px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ color: "#0E204E" }}>
            Lorem ipsum dolor sit amet, consectetur
          </Typography>
          <Checkbox
            {...label}
            sx={{
              p: "0",
              scale: "100%",
            }}
          />
        </Box>
      </ThemeProvider>
    </>
  );
}
