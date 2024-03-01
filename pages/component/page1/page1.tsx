import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import ImageMain1 from "../img/img-1/unsplash_XbwHrt87mQ0.png";
import ImageMbMain1 from "../img/img-1/mb-1/imagemb1.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";
import Hidden from "@mui/material/Hidden";

export default function Page1() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            maxWidth: { xs: "767px", xl: "1920px" },
            px: { xs: "20px", xl: "100px" },
            mb: { xs: "56px", xl: "250px" },
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
                backgroundColor: {
                  md: "#0E204E",
                  sm: "transparent",
                },
                width: "auto",
                height: "auto",
                p: {
                  md: "80px",
                  sm: "0px",
                },
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

            <Box
              sx={{
                position: { xs: "static", lg: "absolute" },
                width: "auto",
                right: 0,
              }}
            >
              <Hidden mdUp>
                <Box sx={{ width: "100%" }}>
                  <Image src={ImageMbMain1} alt="Picture of the author" style={{ width: "100%", height: "auto", filter: "brightness(44%)" }} />
                </Box>
              </Hidden>
              <Hidden lgDown>
                <Box sx={{ width: "71vw" }}>
                  <Image src={ImageMain1} alt="Picture of the author" style={{ width: "100%", height: "auto" }} />
                </Box>
              </Hidden>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
