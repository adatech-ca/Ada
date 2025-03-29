"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
} from "@mui/material";


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        color: "#555",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        &copy; {new Date().getFullYear()} ADA Tech. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <a
          href="https://www.linkedin.com/in/saharabdollahi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#555", textDecoration: "none", fontWeight: 500 }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:info@adatech.ca"
          style={{ color: "#555", textDecoration: "none", fontWeight: 500 }}
        >
          Contact
        </a>
      </Box>
    </Box>
  );
}
