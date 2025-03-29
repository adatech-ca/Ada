"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SurveyButton from "./SurveyButton";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        px: 2,
        backgroundColor: "#f9fafb",
        color: "#1e1e1e",
      }}
    >
      <Typography variant="body2" sx={{ mb: 2, textAlign: "left" }}>
        &copy; {new Date().getFullYear()} ADA Tech. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, textAlign: "left" }}>
        Looking to join our team? Check out our{" "}
        <a
          href="/careers"
          style={{ color: "#1e1e1e", textDecoration: "underline", fontWeight: 500 }}
        >
          career opportunities
        </a>
        .
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <a
            href="https://www.linkedin.com/company/adatech-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1e1e1e", textDecoration: "none", fontWeight: 500 }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:info@adatech.ca"
            style={{ color: "#1e1e1e", textDecoration: "none", fontWeight: 500 }}
          >
            Contact
          </a>
        </Box>
        <SurveyButton />
      </Box>
    </Box>
  );
}
