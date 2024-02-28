import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: "81px",
            mb: "60px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h3>Pineapple Island</h3>
          <h3>About Us</h3>
          <h3>What we do</h3>
          <h3>Project</h3>
          <h3>Get in Touch</h3>
        </Box>
      </Container>
    </>
  );
}
