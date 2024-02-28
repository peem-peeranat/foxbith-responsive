import React from "react";
import Image from "next/image";
import ImageMain2 from "../img/img-2/unsplash_4T4AcGJvARQ.png";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";

export default function Page2() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            maxWidth: "1720px !important",
            mb: "250px !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",

              width: "100%",
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
                }}
              >
                About
                <br />
                Pineapple
                <br />
                Island
              </Typography>
            </Box>
            <Image src={ImageMain2} alt="Picture of the author" />
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
        </Container>
      </ThemeProvider>
    </>
  );
}
