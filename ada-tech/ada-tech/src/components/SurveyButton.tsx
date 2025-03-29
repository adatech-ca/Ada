"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SurveyButton() {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      onClick={() => router.push("/survey")}
      sx={{
        backgroundColor: "#6366F1", 
        color: "#ffffff",
        ml: 2,
        "&:hover": {
          backgroundColor: "#4F46E5",
        },
        textTransform: "none",
        fontWeight: 600,
        fontSize: "0.875rem",
        borderRadius: "20px",
        px: 3,
        py: 1,
        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
        transition: "all 0.3s ease",
      }}
    >
     Survey
    </Button>
  );
}