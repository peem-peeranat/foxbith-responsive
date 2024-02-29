import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  typography: {
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: "85.31px",
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "60px",
      lineHeight: "79.98px",
    },
    h5: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "42.66px",
    },
    subtitle1: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "32px",
    },
    subtitle2: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "36px",
    },
    h4: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "19.14px",
    },
    h6: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "27.32px",
    },
    body1: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "19.14px",
    },
    body2: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "27px",
    },
    button: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "24.59px",
    },
  },
});

export default customTheme;
