import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import ListImage1 from "../img/img-5/page-1.png";
import ListImage2 from "../img/img-5/page-2.png";
import ListImage3 from "../img/img-5/page-3.png";
import ListImage4 from "../img/img-5/page-4.png";
import ListImage5 from "../img/img-5/page-5.png";
import ListImage6 from "../img/img-5/page-6.png";
import ListImage7 from "../img/img-5/page-7.png";
import ListImage8 from "../img/img-5/page-8.png";
import ListImage9 from "../img/img-5/page-9.png";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";

export default function Page5() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            maxWidth: "1720px !important",
            mb: "250px !important",
            px: "0px !important",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "726px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#0E204E",
                }}
              >
                Galleries
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                }}
              >
                a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: "30px",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            }}
          >
            <Image src={ListImage1} alt="Picture of the author" />
            <Image src={ListImage2} alt="Picture of the author" />
            <Image src={ListImage3} alt="Picture of the author" />
            <Image src={ListImage4} alt="Picture of the author" />
            <Image src={ListImage5} alt="Picture of the author" />
            <Image src={ListImage6} alt="Picture of the author" />
            <Image src={ListImage7} alt="Picture of the author" />
            <Image src={ListImage8} alt="Picture of the author" />
            <Image src={ListImage9} alt="Picture of the author" />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
