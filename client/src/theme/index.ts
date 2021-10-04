import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          padding: "8px 15px",
          lineHeight: "20px",
          boxShadow: "none",
          fontFamily: "'Nunito', sans-serif",
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#1871e8",
    },
    secondary: {
      main: "#4D81B7",
      contrastText: "#fff",
    },
    text: {
      primary: "#2A323C",
      secondary: "#5C6269",
      disabled: "#87898C",
    },
    background: {
      default: "#fff",
      paper: "#fafafa",
    },
    grey: {
      "900": "#000000",
      "300": "#7d7a7a",
      "200": "#c6c6c6",
      "400": "#9ca8b4",
      "100": "#d5efe9",
    },
    info: {
      "100": "rgba(213, 223, 233, 0.17)",
      main: "rgb(213, 223, 233)",
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontWeightBold: 600,
    fontWeightRegular: 400,
    fontSize: 16,
    fontFamily: "'Nunito', 'Roboto', Arial, Helvetica, sans-serif",
    h1: {
      fontFamily: "'Dosis'",
      fontSize: 18,
      lineHeight: "23px",
      fontWeight: "bold",
      letterSpacing: 0.25,
      textTransform: "uppercase",
      fontStyle: "normal",
    },
    h2: {
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "24px",
      marginBottom: "5px",
    },
    h3: {
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "20px",
    },
    h4: {
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "20px",
    },
    body1: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "normal",
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 1.33333,
      fontWeight: "normal",
      marginBottom: 24,
      color: "#87898C",
    },
  },
  spacing: 8,
});

export default theme