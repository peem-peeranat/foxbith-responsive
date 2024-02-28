import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageMain7 from "../img/img-6/unsplash_0Zx1bDv5BNY.png";

export default function Page7() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: "150px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#0E204E",
                fontSize: "60px",
                lineHeight: "79.98pxpx",
                left: "0px",
              }}
            >
              Become an
              <br />
              Agent
            </Typography>
            <Box
              sx={{
                width: "417px",
              }}
            >
              <Typography>a community that gives you a taste of happiness, a place you'll love to live and an opportunity to build a home.</Typography>
            </Box>
            <Box
            //   sx={{
            //     backgroundColor: "#0E204E",
            //     width: "auto",
            //     py: "22px",
            //     px: "73px",
            //   }}
            >
              <Typography>Join Now</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "200px",
                height: "445px",
                backgroundColor: "#0E204E",
              }}
            ></Box>
            <Image src={ImageMain7} alt="Picture of the author" />
          </Box>
        </Box>
      </Container>
    </>
  );
}
