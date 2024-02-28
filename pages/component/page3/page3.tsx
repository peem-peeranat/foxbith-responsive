import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import ImageMain3 from "../img/img-3/unsplash_wRzBarqn3hs.png";
import Fill3 from "../img/img-3/Rectangle 12.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Page2() {
  return (
    <>
      <Box>
        <Box sx={{ position: "absolute", zIndex: "-1" }}>
          <Image src={Fill3} alt="Picture of the author" />
        </Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              height: "100vh",
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
                variant="h1"
                sx={{
                  color: "#FFFF",
                  fontSize: "60px",
                  lineHeight: "79.98pxpx",
                  left: "0px",
                }}
              >
                Why
                <br />
                Choose
                <br />
                Pineapple
                <br />
                Island
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                color: "##FFFF",
                px: "101px",
                py: "109px",
                boxShadow: "3",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#0E204E",
                  fontSize: "20px",
                  width: "275px",
                  lineHeight: "32px",
                }}
              >
                Pineapple Island is the most sought-after community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life
                and homely feeling that is integrated with industrial development. A perfect, professional built abode that gives you the true taste of beauty and happiness.
              </Typography>
            </Box>
            <Box></Box>
            <Image src={ImageMain3} alt="Picture of the author" />
          </Box>
        </Container>
      </Box>
    </>
  );
}
