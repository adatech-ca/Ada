import { Box, Typography, IconButton, Button } from "@mui/material";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";

export default function SocialNetwork() {
  const theme = useTheme();

  return (
    <Box
      id="donate"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
        px: 3,
        borderTop: `2px solid ${theme.palette.divider}`,
        scrollSnapAlign: "start",
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "800px", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Support Innovation & Digital Growth
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, mb: 3 }}
        >
          Your contributions help us develop cutting-edge digital solutions for
          small businesses. Every bit of support makes a difference.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
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
          Donate Now
        </Button>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">
          Based in Toronto, Working Worldwide 🌎
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: "600px",
            mx: "auto",
            mt: 1,
          }}
        >
          Follow us for business growth strategies & digital innovations.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "2rem",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.15)",
              color: theme.palette.primary.dark,
            },
          }}
        >
          <FaFacebook />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{
            color: theme.palette.secondary.main,
            fontSize: "2rem",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.15)",
              color: theme.palette.secondary.dark,
            },
          }}
        >
          <FaInstagram />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          sx={{
            color: theme.palette.info.main,
            fontSize: "2rem",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.15)",
              color: theme.palette.info.dark,
            },
          }}
        >
          <FaTwitter />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          sx={{
            color: theme.palette.success.main,
            fontSize: "2rem",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.15)",
              color: theme.palette.success.dark,
            },
          }}
        >
          <FaLinkedin />
        </IconButton>
      </Box>
    </Box>
  );
}
