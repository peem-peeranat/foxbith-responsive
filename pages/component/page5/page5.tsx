import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListImage1 from "../img/img-5/page-1.png";
import ListImage2 from "../img/img-5/page-2.png";
import ListImage3 from "../img/img-5/page-3.png";
import ListImage4 from "../img/img-5/page-4.png";
import ListImage5 from "../img/img-5/page-5.png";
import ListImage6 from "../img/img-5/page-6.png";
import ListImage7 from "../img/img-5/page-7.png";
import ListImage8 from "../img/img-5/page-8.png";
import ListImage9 from "../img/img-5/page-9.png";

export default function Page5() {
  return (
    <>
      <Container maxWidth="xl">
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
            <Typography>Galleries</Typography>
            <Typography>a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: "repeat(3, 1fr)",
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
    </>
  );
}
