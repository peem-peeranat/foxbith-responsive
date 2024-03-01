import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  typography: {
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: "85.31px",
      "@media (max-width:960px)": {
        fontSize: "26px",
        lineHeight: "34.66px",
        textAlign: "center",
      },
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "60px",
      lineHeight: "79.98px",
      "@media (max-width:960px)": {
        fontSize: "24px",
        lineHeight: "31.99px",
        textAlign: "center",
      },
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
      "@media (max-width:960px)": {
        fontSize: "14px",
        lineHeight: "21px",
        textAlign: "center",
      },
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
