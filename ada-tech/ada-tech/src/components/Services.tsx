"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper } from "@mui/material";

const services = [
  { 
    icon: "💡", 
    title: "AI-Powered Strategies", 
    description: "AI-driven marketing & tech solutions tailored for your business.", 
    color: "primary"
  },
  { 
    icon: "📊", 
    title: "Data Consulting", 
    description: "Leverage AI and analytics to optimize operations & increase efficiency.", 
    color: "success" 
  },
  { 
    icon: "🌐", 
    title: "Web & App Development", 
    description: "Scalable, modern websites & applications built for performance.", 
    color: "info" 
  },
] as const;

export default function Services() {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        minHeight: "100vh",  
        position: "relative",
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 10,
        scrollSnapAlign: "start", 
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
        <source src="ada-tech.mp4" type="video/mp4" />
      </video>

      <Typography variant="h2" fontWeight="bold" textAlign="center" mb={6}>
        Our Services
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, 
          gap: 6,
          maxWidth: "1100px",
          width: "100%",
        }}
      >
        {services.map((service, index) => {
          const paletteColor = theme.palette[service.color as keyof typeof theme.palette];
          const colorMain =
            typeof paletteColor === "object" && "main" in paletteColor
              ? paletteColor.main
              : theme.palette.primary.main;

          return (
            <Paper
              key={index}
              elevation={8}
              sx={{
                p: 5,
                textAlign: "center",
                backgroundColor: theme.palette.background.paper,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" },
              }}
            >
              <Typography variant="h3" sx={{ color: colorMain, fontSize: "3.5rem" }} mb={2}>
                {service.icon}
              </Typography>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: theme.palette.text.primary }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "300px" }}>
                {service.description}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}