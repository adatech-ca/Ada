"use client";

import { Box, Typography, Paper } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";

const services = [
  {
    icon: <WebIcon fontSize="large" />,
    title: "Web Design & Development",
    description: "Responsive, high-performance websites tailored to your brand, built with the latest frameworks.",
  },
  {
    icon: <BusinessCenterIcon fontSize="large" />,
    title: "Mobile App Design",
    description: "Beautiful, intuitive apps for iOS and Android — from wireframes to launch and beyond.",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "UI/UX Strategy",
    description: "User-first experiences powered by research, design thinking, and modern design systems.",
  },
  {
    icon: <DescriptionIcon fontSize="large" />,
    title: "Prototyping & MVP Launch",
    description: "Turn your idea into a functional MVP fast — perfect for testing, validating, and pitching.",
  },
  {
    icon: <WebIcon fontSize="large" />,
    title: "Custom CMS Solutions",
    description: "Scalable content management systems tailored to your needs — no bloated themes or templates.",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "Tech Consulting",
    description: "We guide your team with the right stack, workflows, and architecture to future-proof your business.",
  },
];

export default function ServicesPage() {
  return (
    <Box sx={{ mt: 10, py: 10, px: 3, minHeight: "100vh" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{
          color: "#fff",
          letterSpacing: 1.5,
          textShadow: "0 2px 4px rgba(0,0,0,0.6)",
        }}
      >
        Our Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
         
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
              background: "#ffffff",
              borderRadius: 3,
              border: "1px solid #e0e0e0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
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