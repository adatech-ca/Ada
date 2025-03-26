"use client";

import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import { useState } from "react";
import BusinessVideos from "./BusinessVideos";

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
    <Box id="home">
      <BusinessVideos />
      <Box
        sx={{
          minHeight: "40vh",
          mt: 12,
          pt: { xs: 4, sm: 6, md: 8 },
          paddingBottom: { xs: 6, sm: 8 },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          backgroundColor: "#fefefe",
          color: "#111",
          textAlign: "center",
          px: 1,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
            sx={{
              maxWidth: "700px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "100%",
                margin: "auto",
                textAlign: "center",
                alignItems: "center",
                background: "#f9f9f9",
                padding: "10px",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              }}
            >
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mt: { xs: 2, sm: 3 },
                    mb: { xs: 2, sm: 3 },
                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                    fontWeight: 400,
                    opacity: 0.85,
                    textAlign: "center",
                    maxWidth: "800px",
                    mx: "auto",
                  }}
                >
                  We craft innovative digital solutions to move your business
                  forward
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => setOpenModal(true)}
                    sx={{
                      border: "1px solid #111",
                      color: "#111",
                      borderRadius: "50px",
                      px: 4,
                      py: 1.5,
                      fontWeight: 500,
                      textTransform: "none",
                      fontSize: "1rem",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#111",
                        color: "#fff",
                      },
                    }}
                  >
                    Book Consultation
                  </Button>
                  <BookingModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                  />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>
      </Box>
    </Box>
  );
}