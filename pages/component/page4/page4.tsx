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

export default function Page4() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            mb: "112px",
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
            What Pineapple Land Offers
          </Typography>
        </Box>

        {/* -------------------------------------------cardtop------------------------------------------- */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image src={ImageMain4} alt="Picture of the author" />
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
              height: "358px",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              <Image src={IconTree} alt="Picture of the author" />
              <Typography>Eco Friendly</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              <Image src={IconCash} alt="Picture of the author" />
              <Typography>Smart Homes</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              <Image src={IconWifi} alt="Picture of the author" />
              <Typography>Good Rates</Typography>
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
              height: "358px",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              <Image src={IconServiece} alt="Picture of the author" />
              <Typography>Serviced Apartment</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              <Image src={IconLock} alt="Picture of the author" />
              <Typography>Private Security</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              <Image src={IconLamp} alt="Picture of the author" />
              <Typography>24/7 Electricity</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
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
    </>
  );
}
