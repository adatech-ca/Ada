"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const jobListings = [
  { title: "Full Stack Developer", location: "Remote", type: "Contract", open: true },
  { title: "UI/UX Designer", location: "Toronto, ON", type: "Part-Time", open: false },
  { title: "Marketing Specialist", location: "Remote", type: "Contract", open: false },
  { title: "Backend Developer", location: "Hybrid (Toronto, ON)", type: "Full-Time", open: false },
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
        mt:10,
        textAlign: "center",
        bgcolor: "#ffffff",
        color: "#111",
        scrollSnapAlign: "start",
      }}
    >
        <Typography variant="h5" sx={{ mb: 2 }}>
 Enjoy mixing creativity and code to help businesses shine?
 </Typography>
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
      Let’s work together!
      </Typography>
    

      {/* 💼 Job Listings (No Grid) */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
       Open Positions
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: "600px", width: "100%", mb: 6 }}>
        {jobListings.map((job, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <Paper
              elevation={3}
              sx={{
                p: 2.5,
                borderRadius: 2,
                background: index % 2 === 0 ? "#f9fafb" : "#f1f5f9",
                borderLeft: "4px solid #4F46E5",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                },
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">{job.title}</Typography>
              <Typography variant="caption" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                {job.location} • {job.type}
              </Typography>

              {job.open ? (
                <Button
                  variant="contained"
                  size="small"
                  fullWidth
                  onClick={() => router.push("/careers/fullstack-developer")}
                  sx={{
                    fontWeight: "bold",
                    borderRadius: 2,
                    backgroundColor: "#4F46E5",
                    mt: 2,
                    "&:hover": {
                      backgroundColor: "#3730A3",
                    },
                  }}
                >
                  View Details
                </Button>
              ) : (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                Closed
                </Typography>
              )}
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}