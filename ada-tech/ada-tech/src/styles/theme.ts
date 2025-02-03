import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#FF0000" }, // 🔴 Change this to Red for testing
    secondary: { main: "#00FF00" }, // 🟢 Green
    background: { default: "#111827", paper: "#1F2937" },
    text: { primary: "#FFFFFF", secondary: "#E5E7EB" },
  
  },
  typography: {
    fontFamily: "var(--font-geist-sans)", 
    h1: { fontSize: "3rem", fontWeight: 800, color: "#FFFFFF !important" }, // ✅ Forces White
    h2: { fontSize: "2.5rem", fontWeight: 700, color: "#FFFFFF" },
    h3: { fontSize: "2rem", fontWeight: 600, color: "#FFFFFF" },
    body1: { fontSize: "1rem", fontWeight: 400, color: "#E5E7EB" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", 
          borderRadius: "8px",
          fontWeight: "bold",
          color: "#FFFFFF !important",
        },
      },
    },
  },
});
console.log("🔹 MUI Theme Loaded:", theme.palette.primary.main);
export default theme;