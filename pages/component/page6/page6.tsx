import React from "react";
import Image from "next/image";

import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageMain6 from "../img/img-6/Rectangle 51.png";
import IconMain6 from "../img/img-6/Vector.png";
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
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: "94px",
              }}
            >
              <Image src={ImageMain6} alt="Picture of the author" />
              <Box
                sx={{
                  width: "200px",
                  height: "445px",
                  backgroundColor: "#0E204E",
                }}
              ></Box>
            </Box>
            <Box>
              <Typography variant="h2" sx={{ color: "#0E204E" }}>
                Amazing Features
              </Typography>
              <Box
                sx={{
                  width: "542px",
                  height: "46px",
                  backgroundColor: "rgba(14, 63, 51, 0.2)",
                  display: "flex",
                  px: "24px",
                  py: "13px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" sx={{ color: "#0E204E" }}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Image src={IconMain6} alt="Picture of the author" />
              </Box>
              <Box
                sx={{
                  width: "542px",
                  height: "46px",
                  backgroundColor: "white",
                  display: "flex",
                  px: "24px",
                  py: "13px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" sx={{ color: "#0E204E" }}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Image src={IconMain6} alt="Picture of the author" />
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
