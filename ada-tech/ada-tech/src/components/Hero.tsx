import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: theme.palette.text.primary,
        textAlign: "center",
        px: 3,
        scrollSnapAlign: "start",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/ada.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.2)", 
          backdropFilter: "blur(1px)", 
          zIndex: -1,
        }}
      />

      {/* ✨ Refined Title & Subtitle */}
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{
          mb: 2,
          color: theme.palette.text.primary,
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        Welcome to <span style={{ color: theme.palette.primary.main }}>ADA Tech</span>
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: "rgba(255,255,255,0.85)", 
          maxWidth: "600px",
          fontWeight: 500,
        }}
      >
        Elevate your business with modern **digital solutions** that drive **growth, efficiency, and impact.**
      </Typography>

      {/* 🟢 Buttons (Refined for Modern Look) */}
      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "12px",
            textTransform: "none",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: theme.palette.success.dark,
              transform: "scale(1.05)",
            },
          }}
          onClick={() => handleNavClick("contact")}
        >
          Get Started
        </Button>

        <Button
          variant="outlined"
          color="info"
          size="large"
          sx={{
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "12px",
            textTransform: "none",
            border: `2px solid ${theme.palette.info.main}`,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: theme.palette.info.light,
              color: theme.palette.info.contrastText,
              transform: "scale(1.05)",
            },
          }}
          onClick={() => handleNavClick("services")}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}