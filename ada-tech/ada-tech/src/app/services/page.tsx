"use client";

import { Box, Typography, Paper } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";

const services = [
  {
    icon: <WebIcon fontSize="large" />,
    title: "Custom Product Development",
    description: "Design and build modern digital products tailored to your goals — from MVP to launch-ready platforms.",
  },
  {
    icon: <BusinessCenterIcon fontSize="large" />,
    title: "System Integration & Automation",
    description: "Streamline your operations by connecting the right tools and automating your workflows.",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "Business Strategy & Branding",
    description: "Craft a bold business identity and growth roadmap that aligns with your market and vision.",
  },
  {
    icon: <DescriptionIcon fontSize="large" />,
    title: "Business Model Documentation",
    description: "We help you articulate a fundable, scalable business model — clearly and professionally.",
  },
  {
    icon: <WebIcon fontSize="large" />,
    title: "Data Infrastructure Setup",
    description: "Establish a modern data foundation with clean pipelines, dashboards, and reliable reporting tools.",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "Analytics & Optimization",
    description: "Use smart tracking and performance audits to turn data into decisions that grow your business.",
  },
];

export default function ServicesPage() {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "#fff", minHeight: "100vh" }}>
      <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
        Our Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mt: 4,
        }}
      >
        {services.map((service, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              maxWidth: 300,
              minHeight: 260,
              flex: "1 1 250px",
              background: index % 2 === 0 ? "#f9fafb" : "#f1f5f9",
              borderLeft: "4px solid #4F46E5",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
              },
            }}
          >
            <Box sx={{ mb: 1 }}>{service.icon}</Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              {service.title}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {service.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}