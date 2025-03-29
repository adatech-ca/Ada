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
        backgroundColor: "#ec4899", // modern pink
        color: "#fff",
        ml: 2,
        "&:hover": {
          backgroundColor: "#db2777",
        },
        textTransform: "none",
        fontWeight: 600,
        fontSize: "0.875rem",
        borderRadius: "20px",
        px: 3,
        py: 1,
        boxShadow: "0 4px 12px rgba(236, 72, 153, 0.4)",
        transition: "all 0.3s ease",
      }}
    >
      Take Survey
    </Button>
  );
}