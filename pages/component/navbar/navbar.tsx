import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Navbar() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            maxWidth: "1920px !important",
            px: "100px !important",
          }}
        >
          <Box
            sx={{
              mt: "81px",
              mb: "60px",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#0E204E",
              }}
            >
              Pineapple
              <br />
              Island
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "92px",
              }}
            >
              <Link href="#" underline="none">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#232323",
                  }}
                >
                  About Us
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#232323",
                  }}
                >
                  What we do
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#232323",
                  }}
                >
                  Project
                </Typography>
              </Link>
            </Box>
            <Button
              variant="contained"
              sx={{
                py: "14px",
                px: "40px",
                backgroundColor: "#0E204E",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                }}
              >
                Get in touch
              </Typography>
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
