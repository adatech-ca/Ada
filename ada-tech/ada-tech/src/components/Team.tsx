"use client";

import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";

const teamMembers = [
  {
    name: "Sahar Abdollahi",
    role: "Developer & Business Strategist",
    image: "/team/sahar.jpg",
    bio: "Bridging technology and strategy to deliver impactful digital products.",
  },
  {
    name: "Iman Hedeshy",
    role: "Business Strategy & Digital Solution Specialist",
    image: "/team/iman.jpg",
    bio: "Transforming ideas into actionable business strategies and solutions.",
  },
  {
    name: "Alborz Mahmoudi",
    role: "Business Consultant & Project Manager",
    image: "/team/alborz.jpg",
    bio: "Ensuring strategic execution and smooth delivery of projects with a business-first mindset.",
  },
  {
    name: "Sadaf Abd",
    role: "Marketing Consultant",
    image: "/team/sadaf.jpg",
    bio: "Connecting brands with audiences through creative marketing.",
  },
];

export default function Team() {
  return (
    <Box
      id="team"
      sx={{
        py: 8,
        backgroundColor: "#fafafa",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Meet Team
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ maxWidth: "600px", mx: "auto", mb: 3 }}
      >
        A powerful blend of tech, strategy, and creativity—driven by passion, purpose, and people.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 100, height: 100, mb: 2, mx: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {member.role}
              </Typography>
              <Typography variant="body2">{member.bio}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
