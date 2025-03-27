"use client";

import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BookingModal from "./BookingModal";
import { useState } from "react";

export default function Hero() {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 1,
        py: 4, // add this line to limit vertical padding
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
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
            filter: "brightness(0.3)",
          }}
        >
          <source src="/ada.mp4" type="video/mp4" />
        </video>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          gap: 1.5, // reduced vertical gap
          px: { xs: 2, md: 1 },
          zIndex: 1,
        }}
      >
        <Typography variant="h6" sx={{ color: "#FFF", maxWidth: "800px" }}>
          Elevate your brand with smart, scalable, AI-powered digital solutions.
        </Typography>
        <Button
          variant="contained"
          size="large"
          aria-label="Book a Free Consultation Session"
          onClick={() => setOpenModal(true)}
          sx={{
            backgroundColor: "#fff",
            color: "#111",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Book One Free Consultation
        </Button>
        <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
      </Box>
    </Box>
  );
}
