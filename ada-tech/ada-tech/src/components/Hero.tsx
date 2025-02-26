import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

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
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: theme.palette.text.primary,
        textAlign: "center",
        px: 1,
        overflow: "hidden",
      }}
    >
{/* 
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/ada.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay for Better Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))", // Darker at bottom for contrast
          backdropFilter: "blur(5px)", // Glass effect
          zIndex: -1,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparency
            backdropFilter: "blur(10px)", // Glass effect
            padding: "20px 40px",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // Soft shadow
            display: "inline-block",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "#fff",
              textShadow: "0px 4px 20px rgba(0, 0, 0, 0.8)",
            }}
          >
            Welcome to{" "}
            <span style={{ color: theme.palette.primary.main }}>ADA Tech</span>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              fontWeight: 400,
              mt: 1,
              textShadow: "0px 2px 12px rgba(0, 0, 0, 0.6)",
            }}
          >
            Future-Driven Digital Solutions 
          </Typography>
        </Box>
      </motion.div>

      {/* Call to Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontWeight: "bold",
              px: 5,
              py: 1.8,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "1.1rem",
              transition: "0.3s",
              boxShadow: "0 4px 15px rgba(0, 128, 255, 0.5)",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(0, 128, 255, 0.7)",
              },
            }}
            onClick={() => handleNavClick("contact")}
          >
            Get Started 
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}