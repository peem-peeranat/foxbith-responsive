import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";
export default function Page8() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            maxWidth: "1720px !important",
            mb: "250px !important",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: "60px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#0E204E",
                  fontSize: "60px",
                  lineHeight: "79.98pxpx",
                  left: "0px",
                }}
              >
                Stay In Touch
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mt: "60px",
                }}
              >
                Are you curious about Pineapple Island? Send a message
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "53px",
                px: "405px",
              }}
            >
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Phone No" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Message" variant="outlined" multiline rows={12} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    py: "15px",
                    px: "50px",
                    backgroundColor: "#0E204E",
                    width: "145px",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Send
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
