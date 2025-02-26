"use client";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import { useState } from "react";

const videos = ["/1.mp4", "/2.mp4", "/3.mp4", "/4.mp4", "/5.mp4", "/7.mp4"];

export default function AboutUs() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      id="about-us"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        color: "white",
        px: 4,
        py: 10,
        minHeight: "100vh",
        overflow: "hidden",
        gap: 4,
      }}
    >
      {/* 🎥 Video Grid Animation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          width: "50%",
        }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Box
              sx={{
                width: "130px",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0, 255, 255, 0.2)", // Neon glow
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 30px rgba(0, 255, 255, 0.5)", // Glowing effect
                },
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </Box>
          </motion.div>
        ))}
      </motion.div>

      {/* 📢 Text & CTA Section with Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            maxWidth: "45%",
            textAlign: "left",
            background: "rgba(255, 255, 255, 0.1)", // Glassmorphism effect
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(90deg, #22c55e, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2.2rem",
            }}
          >
            Our Expertise
          </Typography>
          <Typography variant="h6" sx={{ mt: 3, mb: 3, opacity: 0.85 }}>
            With over 10 years of experience, we help businesses achieve digital success.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setOpenModal(true)}
            sx={{
              fontWeight: "bold",
              px: 5,
              py: 1.8,
              fontSize: "1.1rem",
              borderRadius: "50px",
              transition: "0.3s",
              boxShadow: "0 0 20px rgba(0, 128, 255, 0.6)", // Neon glow
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 25px rgba(0, 128, 255, 0.9)",
              },
            }}
          >
            Book Your Free Consultation 🚀
          </Button>
        </Box>
      </motion.div>

      <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
}