"use client";

import Services from "@/components/Services";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Box
        id="hero"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.900",
          color: "white",
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Welcome to ADA Tech
        </Typography>
      </Box>

      {/* Services Section */}
      <Services />

      {/* Consultation Section */}
      <Box
        id="consultation"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.800",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Consultation
        </Typography>
      </Box>

      {/* Donate Section */}
      <Box
        id="donate"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.700",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Support Us
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.600",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Get in Touch
        </Typography>
      </Box>
    </main>
  );
}