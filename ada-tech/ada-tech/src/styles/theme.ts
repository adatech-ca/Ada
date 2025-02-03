import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#007AFF", contrastText: "#FFFFFF" }, // 🔵 Apple Blue
    secondary: { main: "#34C759", contrastText: "#FFFFFF" }, // 🌿 Bright Green
    success: { main: "#30D158", contrastText: "#FFFFFF" }, // ✅ Softer Apple Green
    warning: { main: "#FFD60A", contrastText: "#1C1C1E" }, // 🟡 Soft Gold
    error: { main: "#FF453A", contrastText: "#FFFFFF" }, // 🔴 Bold Apple Red
    info: { main: "#5AC8FA", contrastText: "#FFFFFF" }, // 🔵 Light Blue

    background: {
      default: "#F5F5F7", // 🌫 Light Silver (Apple Minimalist Background)
      paper: "#FFFFFF", // Pure White for Cards
      
    },

    text: {
      primary: "#1C1C1E", // 🌑 Space Gray for Readability
      secondary: "#8E8E93", // Soft Gray for Subtext
    },

    divider: "#D1D1D6", // Light Apple Divider Gray
  },

  typography: {
    fontFamily: `"SF Pro Display", "Inter", "Roboto", "Arial", sans-serif`,
    h1: { fontSize: "3rem", fontWeight: 800 },
    h2: { fontSize: "2.5rem", fontWeight: 700 },
    h3: { fontSize: "2rem", fontWeight: 600 },
    body1: { fontSize: "1rem", fontWeight: 400 },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          padding: "12px 24px",
          "&:hover": {
            filter: "brightness(1.15)", // Slight Glow on Hover
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1C1C1E",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)", // Soft Shadow
        },
      },
    },
  },
});

export default theme;