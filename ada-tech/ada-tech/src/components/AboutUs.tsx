"use client";
import { Box, Typography, Button } from "@mui/material";
import theme from "@/styles/theme";
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

export default function AboutUs() {
    
    const [openModal, setOpenModal] = useState(false);
  return (
    <Box
      id="AboutUs"
      sx={{
        height: "30vh",
        display: "flex",
        flexDirection: { xs: "row", md: "row" },
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
      <motion.div
        initial={{ x: 5 }}
        animate={{ x: "50%" }}
        transition={{
          ease: "linear",
          duration: 50,
          repeat: Infinity,
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
        }}
      >
        {[...videos, ...videos].map((video, index) => (
          <Box
            key={index}
            sx={{
              width:"100px",
              height: "160px",
              borderRadius: "12px",
              overflow: "hidden",
              opacity: "80%"
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
      <Box sx={{ width: "50%" }}>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Our Expertise
        </Typography>
        <Typography variant="h6" sx={{mt:3, mb:3}}>
          We have over 10 years of experience in providing business and
          management consulting services to companies of all sizes. Our team of
          experts has a deep understanding of the industry and can help you
          achieve your business goals.
        </Typography>
      </Box>
      <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => setOpenModal(true)}
          sx={{
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "8px",
            textTransform: "none",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "scale(1.05)",
            },
          }}
        >
          Book your Free Consultation
        </Button>
      <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
       </Box>
    </Box>
  );
}
