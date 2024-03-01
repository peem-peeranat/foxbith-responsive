import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageMain4 from "../img/img-4/Rectangle 7.png";
import IconTree from "../img/img-4/fluent_tree-evergreen-20-regular.png";
import IconCash from "../img/img-4/ic_outline-payments.png";
import IconWifi from "../img/img-4/wifi.png";
import ImageMain4b from "../img/img-4/Rectangle 20.png";
import IconServiece from "../img/img-4/icons8_services.png";
import IconLock from "../img/img-4/bytesize_lock.png";
import IconLamp from "../img/img-4/emojione-monotone_light-bulb.png";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../customTheme";
import Grid from "@mui/material/Grid";

export default function Page4() {
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
              width: "100%",
              justifyContent: "center",
              mb: "112px",
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
              What Pineapple Land Offers
            </Typography>
          </Box>

          {/* -------------------------------------------cardtop------------------------------------------- */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Box>
                <Image src={ImageMain4} alt="Picture of the author" />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#0E204E",
                  width: "206px",
                  height: "358px",
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "144px",
                justifyContent: "flex-start",
                alignItems: "center",
                pl: "152px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                  alignItems: "center",
                }}
              >
                <Image src={IconTree} alt="Picture of the author" />
                <Typography variant="body2">Eco Friendly</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                  alignItems: "center",
                }}
              >
                <Image src={IconCash} alt="Picture of the author" />
                <Typography variant="body2">Smart Homes</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                  alignItems: "center",
                }}
              >
                <Image src={IconWifi} alt="Picture of the author" />
                <Typography variant="body2">Good Rates</Typography>
              </Box>
            </Box>
          </Box>

          {/* -------------------------------------------cardbottom------------------------------------------- */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "144px",
                justifyContent: "flex-end",
                alignItems: "center",
                pr: "120px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                  alignItems: "center",
                }}
              >
                <Image src={IconServiece} alt="Picture of the author" />
                <Typography variant="body2">Serviced Apartment</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                  alignItems: "center",
                }}
              >
                <Image src={IconLock} alt="Picture of the author" />
                <Typography variant="body2">Private Security</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                  alignItems: "center",
                }}
              >
                <Image src={IconLamp} alt="Picture of the author" />
                <Typography variant="body2">24/7 Electricity</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#0E204E",
                  width: "206px",
                  height: "358px",
                }}
              ></Box>
              <Image src={ImageMain4b} alt="Picture of the author" />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
