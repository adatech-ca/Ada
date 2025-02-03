"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper, PaletteColor } from "@mui/material";

const services = [
  { icon: "💡", title: "AI-Powered Strategies", description: "AI-driven marketing & tech solutions.", color: "primary" },
  { icon: "📊", title: "Data Consulting", description: "Optimize operations with insights.", color: "red !important" },
  { icon: "🌐", title: "Web & App Development", description: "Scalable websites & applications.", color: "red !important" },
] as const;

export default function Services() {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
      }}
    >
      <Typography variant="h2" fontWeight="bold" textAlign="center" mb={4}>
        Our Services
      </Typography>

      {/* Services Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          maxWidth: "1000px",
          justifyContent: "center",
        }}
      >
        {services.map((service, index) => {
          // ✅ FIX: Check if `.main` exists before using it
          const paletteColor = theme.palette[service.color as keyof typeof theme.palette];
          const colorMain =
            (paletteColor as PaletteColor)?.main ?? (paletteColor as string) ?? theme.palette.primary.main;

          return (
            <Paper
              key={index}
              elevation={6}
              sx={{
                flex: "1 1 300px",
                p: 4,
                textAlign: "center",
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Typography variant="h3" sx={{ color: colorMain, fontSize: "3rem" }} mb={2}>
                {service.icon}
              </Typography>
              <Typography variant="h5" fontWeight="bold" mb={1}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}