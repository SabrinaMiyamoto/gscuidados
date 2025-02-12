import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#409ECE" },
    background: {
      default: "#e2e2e3", 
    },
  },
  typography: {
    fontFamily: "Funnel Sans, sans-serif",
    h1: { 
      color: "#051957", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    h2: { 
      color: "#184782", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    h3: { 
      color: "#1f5a99", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    h4: { 
      color: "#26619e", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    h5: { 
      color: "#34A8FF", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    h6: { 
      color: "#2A92CA", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    body1: { 
      color: "#26619e", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    body2: { 
      color: "#2b8cbb", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
