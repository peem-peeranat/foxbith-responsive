import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";
import Button from "@mui/material/Button";
import ImageFooter from "../img/Footer/Rectangle 1.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            maxWidth: "1920px !important",
            px: "100px !important",
          }}
        >
          <Box sx={{ right: "0", position: "absolute", zIndex: "-1" }}>
            <Image src={ImageFooter} alt="Picture of the author" />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "154px",
            }}
          >
            <Box
              sx={{
                color: "white",
              }}
            >
              <Typography variant="h2">
                Banana
                <br />
                Island
              </Typography>
              <Typography variant="subtitle2" sx={{ width: "338px" }}>
                a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
              </Typography>
            </Box>
            <Box
              sx={{
                color: "white",
              }}
            >
              <Typography variant="h2">Follow up</Typography>
              <Typography variant="h6" sx={{ width: "316px" }}>
                Keep up with our newsletter to get updates about projects and offers
              </Typography>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
