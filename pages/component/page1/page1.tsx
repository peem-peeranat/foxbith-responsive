import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import ImageMain1 from "../img/img-1/unsplash_XbwHrt87mQ0.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Page1() {
  return (
    <div>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            position: "static",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              top: "293px",
              position: "absolute",
              zIndex: "2",
              backgroundColor: "#0E204E",
              width: "auto",
              height: "auto",
              p: "80px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontSize: "64px",
                lineHeight: "85.31px",
              }}
            >
              Pineapple Island:
              <br />
              GenZ and Millenial
              <br />
              Abode
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "white",
                fontSize: "20px",
                pt: "20px",
              }}
            >
              a community that gives you a taste of happiness, a place you'll love <br />
              to live and an opportunity to build a home.
            </Typography>
          </Box>

          <Box sx={{ right: "0", position: "absolute", zIndex: "" }}>
            <Image src={ImageMain1} alt="Picture of the author" />
          </Box>
        </Box>
      </Container>
    </div>
  );
}
