"use client";

import { Box, Button, Container, Typography } from "@mui/material";

export default function FullStackDeveloperPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        py: 8,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt:10
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Full Stack Developer (Contract)
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Remote 
        </Typography>

        <Typography variant="body1" sx={{ mt: 4, mb: 3 }}>
          ADA Tech is looking for a creative and capable Full Stack Developer to collaborate on next-gen web and mobile solutions for small businesses and startups. You'll work across our React + Node.js stack to bring real-world digital products to life — from business websites and e-commerce platforms to automation tools and AI-powered features.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
          Responsibilities
        </Typography>
        <ul>
          <li>Build and maintain full-stack applications using modern frameworks</li>
          <li>Write clean, efficient, and scalable code</li>
          <li>Collaborate with designers and strategists to bring ideas to life</li>
          <li>Integrate APIs, optimize performance, and debug issues</li>
        </ul>

        <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
          Requirements
        </Typography>
        <ul>
          <li>3+ years experience with React, Node.js, TypeScript</li>
          <li>Comfortable with frontend state management and REST APIs</li>
          <li>Basic familiarity with cloud and deployment pipelines</li>
          <li>Strong problem-solving and communication skills</li>
        </ul>

        <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
          How to Apply
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Send your resume (PDF) and a brief intro to either:
        </Typography>
        <Typography variant="body1">
          📧 <strong>iman.hedeshy@gmail.com</strong>
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          href="mailto:iman.hedeshy@gmail.com,sahar.abdollahi@torontomu.ca"
          sx={{ textTransform: "none" }}
        >
          Apply Now
        </Button>
      </Container>
    </Box>
  );
}
