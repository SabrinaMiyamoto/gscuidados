import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App";


const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#76B1A9" },
    background: {
      default: "#e9eef7", 
    },
  },
  typography: {
    fontFamily: "Funnel Sans, sans-serif",
    h1: { 
      color: "#76B1A9", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    h2: { 
      color: "#3778fa", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    h5: { 
      color: "#34A8FF", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    h6: { 
      color: "#76B1A9", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    body1: { 
      color: "#2e2e2e", 
      fontFamily: "Funnel Sans, sans-serif", 
    },
    body2: { 
      color: "#cf2721", 
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
