import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#008060", contrastText: "#FFFFFF" }, 
    secondary: { main: "#5E3DB3", contrastText: "#FFFFFF" },
    success: { main: "#26A69A", contrastText: "#FFFFFF" }, 
    warning: { main: "#FFC107", contrastText: "#1C1C1E" },
    error: { main: "#D82C0D", contrastText: "#FFFFFF" }, 
    info: { main: "#9C27B0", contrastText: "#FFFFFF" }, 

    background: {
      default: "#F1F3F5",
      paper: "#FFFFFF", 
    },

    text: {
      primary: "#1C1C1E",
      secondary: "#63666A", 
    },

    divider: "#E1E3E6", 
  },

  typography: {
    fontFamily: `"Inter", "Poppins", "Roboto", "Arial", sans-serif`,
    h1: { fontSize: "3rem", fontWeight: 800, letterSpacing: "-0.4px" },
    h2: { fontSize: "2.6rem", fontWeight: 700, letterSpacing: "-0.3px" },
    h3: { fontSize: "2rem", fontWeight: 600 },
    h4: { fontSize: "1.6rem", fontWeight: 600 },
    body1: { fontSize: "1rem", fontWeight: 400, lineHeight: "1.7" },
    body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: "1.6" },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          fontWeight: "600",
          fontSize: "1rem",
          padding: "12px 26px",
          transition: "all 0.3s ease-in-out",
          boxShadow: "none",
          "&:hover": {
            filter: "brightness(1.08)",
            transform: "scale(1.03)",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1C1C1E",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#1C1C1E",
        },
      },
    },
  },
});

export default theme;