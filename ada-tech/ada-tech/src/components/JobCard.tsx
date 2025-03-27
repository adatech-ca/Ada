// components/JobCard.tsx
"use client";

import { useRouter } from "next/navigation";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function JobCard() {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push("/careers/fullstack-developer");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        background: "#f9fafb",
        borderLeft: "4px solid #4F46E5",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        },
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold">
        Full Stack Developer (Contract)
      </Typography>
      <Typography variant="caption" sx={{ color: "text.secondary", mb: 1 }}>
        Remote • Contract – Part-time or Full-time
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        ADA Tech is looking for a creative and capable Full Stack Developer to collaborate on next-gen web and mobile solutions...
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleViewDetails}
        sx={{ textTransform: "none" }}
      >
        View Details
      </Button>
    </Paper>
  );
}
