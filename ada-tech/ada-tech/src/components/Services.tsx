"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WebIcon from "@mui/icons-material/Web";
import AboutUs from "./AboutUs";

const services = [
  {
    icon: <BusinessCenterIcon fontSize="large" />,
    title: "Business Digitalization",
    description: "Transform your business with smart digital strategies.",
  },
  {
    icon: <WebIcon fontSize="large" />,
    title: "Custom Web Development",
    description: "We build high-performance websites tailored to your needs.",
  },
  {
    icon: <StorefrontIcon fontSize="large" />,
    title: "E-Commerce Solutions",
    description: "Create seamless online shopping experiences.",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "Data & Analytics",
    description: "Unlock business insights with advanced data analytics.",
  },
];

export default function Services() {
  const theme = useTheme();

  return (
    <>
      <Box
        id="services"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          px: 3,
          py: 10,
          background: "linear-gradient(to right, #111827, #1f2937)", // More professional dark gradient
          color: "white",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.3)", 
            backdropFilter: "blur(3px)", 
            zIndex: 1,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 6,
              textTransform: "uppercase",
              background: "linear-gradient(90deg, #22c55e, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2.5rem",
            }}
          >
            Elevate Your Business with Digital Innovation 🚀
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 4,
            width: "100%",
            maxWidth: "1200px",
            px: 2,
            position: "relative",
            zIndex: 2,
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Paper
                elevation={10}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.1)", // Glassmorphism effect
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.08)",
                    boxShadow: "0px 15px 40px rgba(0, 255, 255, 0.3)", // Neon glow effect
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  },
                }}
              >
                <Box sx={{ fontSize: "3rem", color: theme.palette.primary.main }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                  {service.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              Ready to take your business to the next level?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 3,
                px: 5,
                py: 1.8,
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "30px",
                transition: "0.3s",
                boxShadow: "0 0 20px rgba(0, 128, 255, 0.6)",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 0 25px rgba(0, 128, 255, 0.9)",
                },
              }}
            >
              Get a Free Consultation
            </Button>
          </Box>
        </motion.div>
      </Box>

      <AboutUs />
    </>
  );
}