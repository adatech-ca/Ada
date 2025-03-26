"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import WebIcon from "@mui/icons-material/Web";
import AboutUs from "./BusinessVideos";

const services = [
  {
    icon: <WebIcon fontSize="medium" />,
    title: "Web Development",
    description:
      "We design and develop fast, responsive, and scalable websites tailored to your business needs using the latest technologies like React, Next.js, and TypeScript.",
  },
  {
    icon: <BusinessCenterIcon fontSize="medium" />,
    title: "Digital Strategy & Branding",
    description:
      "We help you establish a strong digital presence through strategic planning, branding, SEO, and social media marketing that aligns with your business goals.",
  },
  {
    icon: <BarChartIcon fontSize="medium" />,
    title: "Analytics & Insights",
    description:
      "Using data-driven insights, we optimize your online performance, track user engagement, and provide recommendations to help your business grow smarter.",
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
          flexDirection: { xs: "row", md: "row" },
          gap: 1,
          justifyContent: "center",
          mt: 1,
        }}
      >
        {services.map((service, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              flex: 1,
              minWidth: "220px",
              background: "#f5f5f5",
              color: "#111",
              borderRadius: 2,
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