import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB", 
    },
    secondary: {
      main: "#9333EA", 
    },
    background: {
      default: "#111827", 
      paper: "#1F2937",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E5E7EB",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
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
        },
      },
    },
  },
});

export default theme;