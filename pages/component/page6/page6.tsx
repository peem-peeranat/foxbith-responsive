import React from "react";
import Image from "next/image";
import ImageMain2 from "../img/img-2/unsplash_4T4AcGJvARQ.png";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageMain6 from "../img/img-6/Rectangle 51.png";
import IconMain6 from "../img/img-6/Vector.png";

export default function Page2() {
  return (
    <>
      <Container maxWidth="xl">
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
            <Typography
              variant="h1"
              sx={{
                color: "#0E204E",
                fontSize: "60px",
                lineHeight: "79.98pxpx",
                left: "0px",
              }}
            >
              Amazing Features
            </Typography>
            <Box
              sx={{
                width: "542px",
                height: "46px",
                backgroundColor: "#0E3F33",
                display: "flex",
                px: "24px",
                py: "13px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur</Typography>
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
              <Typography>Lorem ipsum dolor sit amet, consectetur</Typography>
              <Image src={IconMain6} alt="Picture of the author" />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
