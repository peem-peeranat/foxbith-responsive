import React from "react";
import Image from "next/image";
import ImageMain2 from "../img/img-2/unsplash_4T4AcGJvARQ.png";
import ImageMbMain2 from "../img/img-2/mb-2/unsplash_4T4AcGJvARQ.png";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";
import Hidden from "@mui/material/Hidden";

export default function Page2() {
  return (
    <>
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
              justifyContent: "flex-end",
              alignItems: "center",
              width: "auto",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#0E204E",
                  justifyContent: { sm: "center" },
                }}
              >
                About
                <br />
                Pineapple
                <br />
                Island
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                },
                width: "100%",
              }}
            >
              <Hidden lgDown>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Image src={ImageMain2} alt="Picture of the author" />
                </Box>
              </Hidden>
              <Hidden mdUp>
                <Image src={ImageMbMain2} alt="Picture of the author" style={{ width: "100%", height: "auto", filter: "brightness(64%)" }} />
              </Hidden>
              <Box
                sx={{
                  backgroundColor: "#0E204E",
                  color: "#FFFFFF",
                  px: "60px",
                  py: "134px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "white",

                    width: "315px",
                  }}
                >
                  Pineapple Island is the most sought-after community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life
                  and homely feeling that is integrated with industrial development. A perfect, professional built abode that gives you the true taste of beauty and happiness.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
