"use client";

import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Hero() {
  const theme = useTheme();
 
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
        background: "#ffffff",
        position: "relative",
        width: "100%",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 1,
        py: 4, 
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
        {/* <video
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
        </video> */}
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          textAlign: "start",
          height:"content",
          flexDirection: "column",
          pl:"4rem",
          gap: 2,
          px: { xs: 2, md: 1 },
          zIndex: 1,
        }}
      >
       <Typography variant="body1" sx={{ color: "#e0primarye0e0", maxWidth: "25rem", mt: 1, fontSize: "2rem", fontWeight:"700" }}>
       Launch fast. Scale smarter. Succeed with clarity
       </Typography>
       <Typography variant="h6" sx={{ color: "primary", maxWidth: "1000px", fontSize: "2rem", fontWeight:"300" }}>
        Our Team turn ideas into intelligent digital solutions!
       </Typography>
        <Button
          variant="contained"
          size="large"
          aria-label="Book a Free Consultation Session"
          onClick={() => handleNavClick("Contact")}
          sx={{
            backgroundColor: "#4F46E5",
            color: "#111",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
         Contact Us
        </Button>
      
      </Box>
    </Box>
  );
}
