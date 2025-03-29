"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import JobCard from "@/components/JobCard";



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
        scrollSnapAlign: "start"
      }}
    >
        <Typography variant="h5" sx={{ mb: 2 }}>
 Enjoy mixing creativity and code to help businesses shine?
 </Typography>
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
      Let’s work together!
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
       Open Positions
      </Typography>
    <JobCard/>
    </Box>
  );
}