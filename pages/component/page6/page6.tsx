import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageMain6 from "../img/img-6/Rectangle 51.png";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";
import CheckBoxV1 from "../check_feature/checkfeature";
import CheckBoxV2 from "../check_feature/checkfeaturev2";

export default function Page2() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            maxWidth: "1920px !important",
            px: "100px !important",
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
              <Typography variant="h2" sx={{ color: "#0E204E", mb: "30px" }}>
                Amazing Features
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <CheckBoxV1 />
                <CheckBoxV2 />
                <CheckBoxV1 />
                <CheckBoxV2 />
                <CheckBoxV1 />
                <CheckBoxV2 />
                <CheckBoxV1 />
                <CheckBoxV2 />
                <CheckBoxV1 />
                <CheckBoxV2 />
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
