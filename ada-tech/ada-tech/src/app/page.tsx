"use client";

import Services from "@/components/Services";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <main
      style={{
        scrollSnapType: "y mandatory", 
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      {/* 🌟 Hero Section */}
      <Box
        id="hero"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: "primary.main", // **Bright Blue**
          color: "primary.contrastText",
          textAlign: "center",
          px: 3,
          scrollSnapAlign: "start",
        }}
      >
        <Typography variant="h1" fontWeight="bold" sx={{ mb: 2 }}>
          Welcome to ADA Tech
        </Typography>
        <Typography variant="h5" sx={{ color: "text.secondary", maxWidth: "600px" }}>
          AI-powered digital transformation for businesses.
        </Typography>
        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button variant="contained" color="secondary">
            Get Started
          </Button>
          <Button variant="outlined" color="info">
            Learn More
          </Button>
        </Box>
      </Box>

      {/* 💡 Services Section */}
      <Services />

      {/* 📊 Consultation Section */}
      <Box
        id="consultation"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: "success.main", 
          color: "success.contrastText",
          textAlign: "center",
          px: 3,
          scrollSnapAlign: "start",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Consultation
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", mt: 1, color: "text.secondary" }}>
          Strategic AI solutions tailored for your business.
        </Typography>
        <Button variant="contained" color="error" sx={{ mt: 3 }}>
          Schedule a Call
        </Button>
      </Box>

      {/* 🚀 Donate Section */}
      <Box
        id="donate"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: "warning.main", // **Bright Yellow**
          color: "warning.contrastText",
          textAlign: "center",
          px: 3,
          scrollSnapAlign: "start",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Support Innovation
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", mt: 1, color: "text.primary" }}>
          Help us develop AI-driven solutions for the future.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
          Donate Now
        </Button>
      </Box>

      {/* 📬 Contact Section */}
      <Box
        id="contact"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: "info.main", // **Soft Cyan Blue**
          color: "info.contrastText",
          textAlign: "center",
          px: 3,
          scrollSnapAlign: "start",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", mt: 1, color: "text.primary" }}>
          Connect with us to explore AI-powered business solutions.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Contact Us
        </Button>
      </Box>
    </main>
  );
}