import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import ImageMain1 from "../img/img-1/unsplash_XbwHrt87mQ0.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";

export default function Page1() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            maxWidth: "1920px !important",
            px: "100px !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              position: "static",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                top: "293px",
                position: "absolute",
                zIndex: "2",
                backgroundColor: "#0E204E",
                width: "auto",
                height: "auto",
                p: "80px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                }}
              >
                Pineapple Island:
                <br />
                GenZ and Millenial
                <br />
                Abode
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "white",
                  pt: "20px",
                  width: "100%",
                }}
              >
                a community that gives you a taste of happiness, a place you'll love <br />
                to live and an opportunity to build a home.
              </Typography>
            </Box>

            <Box sx={{ right: "0", position: "absolute", zIndex: "", width: "auto" }}>
              <Image src={ImageMain1} alt="Picture of the author" style={{ width: "71vw", height: "auto" }} />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
