"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper, Button, TextField, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const jobListings = [
  { title: "Frontend Developer", location: "Remote", type: "Full-Time" },
  { title: "UI/UX Designer", location: "Toronto, ON", type: "Part-Time" },
  { title: "Marketing Specialist", location: "Remote", type: "Contract" },
  { title: "Backend Developer", location: "Hybrid (Toronto, ON)", type: "Full-Time" },
];

export default function Careers() {
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#careers") {
      document.getElementById("careers")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Box
      id="careers"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 10,
        textAlign: "center",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        scrollSnapAlign: "start",
      }}
    >
      {/* 🚀 Header Section */}
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
        Join Our Team
      </Typography>
      <Typography variant="h5" sx={{ color: theme.palette.text.secondary, maxWidth: "700px", mb: 5 }}>
        We’re looking for passionate professionals to drive digital transformation.
      </Typography>

      {/* ⭐ Why Work With Us */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          maxWidth: "700px",
          mb: 5,
        }}
      >
        {["🌎 Remote Flexibility", "🚀 Career Growth", "💡 Cutting-Edge Projects", "🤝 Inclusive Culture"].map((benefit, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 3,
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: theme.palette.background.paper,
              width: "100%",
              textAlign: "center",
            }}
          >
            {benefit}
          </Paper>
        ))}
      </Box>

      {/* 💼 Job Listings (No Grid) */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Open Positions
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: "600px", width: "100%", mb: 6 }}>
        {jobListings.map((job, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" },
              }}
            >
              <Typography variant="h6" fontWeight="bold">{job.title}</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                {job.location} • {job.type}
              </Typography>
              <Button variant="contained" color="primary" size="small" onClick={() => router.push("#apply")}>
                Apply Now
              </Button>
            </Paper>
          </motion.div>
        ))}
      </Box>

      {/* 📩 Apply Now Form */}
      <Box id="apply" sx={{ textAlign: "center", width: "100%", mb: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Apply Now
        </Typography>
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            alignItems:"center",
            p: 4,
            bgcolor: theme.palette.background.paper,
            borderRadius: 3,
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
            textAlign: "left",
          }}
        >
          <TextField label="Full Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email Address" type="email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField select label="Position Applying For" variant="outlined" fullWidth sx={{ mb: 2 }}>
            {jobListings.map((job, index) => (
              <MenuItem key={index} value={job.title}>
                {job.title}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="LinkedIn Profile (Optional)" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <Button variant="contained" color="primary" fullWidth>
            Submit Application
          </Button>
        </Box>
      </Box>
    </Box>
  );
}