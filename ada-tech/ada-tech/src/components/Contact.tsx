"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import { useState } from "react";

const videos = [
  "/1.mp4",
  "/2.mp4",
  "/3.mp4",
  "/4.mp4",
  "/5.mp4",
  "/6.mp4",
  "/7.mp4",
  "/1.mp4",
  "/2.mp4",
  "/3.mp4",
  "/4.mp4",
  "/5.mp4",
  "/6.mp4",
  "/7.mp4",
  "/1.mp4",
  "/2.mp4",
  "/3.mp4",
  "/4.mp4",
  "/5.mp4",
  "/6.mp4",
  "/7.mp4",
];

export default function Contact() {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      id="contact"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
        px: 1,
        scrollSnapAlign: "start",
        overflow: "hidden",
      }}
    >
      {/* 📹 Left Section - Infinite Video Loop */}
      <Box
        sx={{
          flex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          ml: 8,
        }}
      >
        <motion.div
          initial={{ y: 5 }}
          animate={{ y: "-50%" }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[...videos, ...videos].map((video, index) => (
            <Box
              key={index}
              sx={{
                width: "85%",
                height: "160px",
                borderRadius: "12px",
                overflow: "hidden",
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
          ))}
        </motion.div>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mr: 8,
          px: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            mb: 2,
            textShadow: "1px 1px 8px rgba(0,0,0,0.15)",
          }}
        >
          Let’s Build Something Amazing
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: "500px",
            mb: 4,
            fontWeight: 500,
          }}
        >
          We help businesses transform digitally. No matter the size or budget,
          we have solutions tailored for you.
        </Typography>
      </Box>
      <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
}
