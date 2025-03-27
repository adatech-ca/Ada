"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import WebIcon from "@mui/icons-material/Web";
import DescriptionIcon from "@mui/icons-material/Description";

const services = [
  {
    icon: <WebIcon fontSize="medium" />,
    title: "Web Development",
    description:
      "High-performance websites built with React, Next.js & TypeScript to launch your brand fast.",
  },
  {
    icon: <BusinessCenterIcon fontSize="medium" />,
    title: "Strategy & Branding",
    description:
      "Position your business with clarity — from market strategy to powerful brand identity.",
  },
  {
    icon: <BarChartIcon fontSize="medium" />,
    title: "Analytics & Optimization",
    description:
      "Data-driven insights to refine your funnel and grow smarter, not harder.",
  },
  {
    icon: <DescriptionIcon fontSize="medium" />,
    title: "Business Model Writing",
    description:
      "We help you define and document a strong, fundable business model investors understand.",
  },
];

export default function Services() {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        background: "#ffffff",
        color: "#111",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          mt: 4,
          px: 2,
        }}
      >
        {services.map((service, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              flex: "1 1 280px",
              background: index % 2 === 0 ? "#f9fafb" : "#f1f5f9",
              color: "#111",
              borderRadius: 2,
              borderLeft: "4px solid #4F46E5",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
              },
            }}
          >
            <Box sx={{ mb: 1 }}>{service.icon}</Box>
            <Typography variant="h6" fontWeight="bold">
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {service.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}