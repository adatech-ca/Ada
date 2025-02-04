"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WebIcon from "@mui/icons-material/Web";
import { PaletteColor } from "@mui/material/styles/createPalette";

const services = [
  { icon: <BusinessCenterIcon fontSize="large" />, title: "Business Digitalization", color: "primary" },
  { icon: <BarChartIcon fontSize="large" />, title: "Data & Analytics", color: "success" },
  { icon: <StorefrontIcon fontSize="large" />, title: "E-Commerce Solutions", color: "info" },
  { icon: <WebIcon fontSize="large" />, title: "Custom Web Development", color: "secondary" },
];

export default function Services() {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        scrollSnapAlign: "start",
        overflow: "hidden",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, color: theme.palette.text.primary }}>
        Elevate Your Business with Digital Solutions
      </Typography>
      <Box sx={{ display: "flex", gap: 4, maxWidth: "1000px", flexWrap: "wrap", justifyContent: "center" }}>
        {services.map((service, index) => {
          const paletteColor = theme.palette[service.color as keyof typeof theme.palette];
          const colorMain = (paletteColor as PaletteColor)?.main || theme.palette.primary.main;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <Paper
                elevation={4}
                sx={{
                  width: "180px",
                  height: "160px",
                  p: 2,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" },
                }}
              >
                <Typography sx={{ color: colorMain, fontSize: "2.5rem" }}>{service.icon}</Typography>
                <Typography variant="h6" fontWeight="bold">{service.title}</Typography>
              </Paper>
            </motion.div>
          );
        })}
      </Box>

      <Box sx={{ textAlign: "center", width: "100%", mt: 6 }}>
        <Typography variant="h6" fontWeight="bold">
          Based in Toronto, Serving Businesses Worldwide 🌎
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: "500px",
            mx: "auto",
            mt: 1,
          }}
        >
          Stay updated with business growth strategies & digital transformation trends.
        </Typography>

        <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt: 3 }}>
          {[
            { href: "https://facebook.com", icon: <FaFacebook />, color: "primary" },
            { href: "https://instagram.com", icon: <FaInstagram />, color: "secondary" },
            { href: "https://twitter.com", icon: <FaTwitter />, color: "info" },
            { href: "https://linkedin.com", icon: <FaLinkedin />, color: "success" },
          ].map((social, index) => {
            const socialColor = theme.palette[social.color as keyof typeof theme.palette] as PaletteColor;
            return (
              <IconButton
                key={index}
                href={social.href}
                target="_blank"
                sx={{
                  color: socialColor?.main,
                  fontSize: "2rem",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.15)",
                    color: socialColor?.dark ?? socialColor?.main, 
                  },
                }}
              >
                {social.icon}
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}