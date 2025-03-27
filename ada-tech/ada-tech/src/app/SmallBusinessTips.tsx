"use client";

import { Box, Typography, Container } from "@mui/material";
import BusinessVideos from "@/components/BusinessVideos";
import { motion } from "framer-motion";

const tips = [
  {
    icon: "💻",
    title: "Build a Professional Website",
    description:
      "75% of consumers judge a business’s credibility based on website design. Invest in a responsive, mobile-friendly site to showcase your services and earn trust.",
  },
  {
    icon: "📱",
    title: "Strengthen Your Online Branding",
    description:
      "Your brand is your promise. Ensure consistency across your website, social platforms, and digital materials to build recognition and loyalty.",
  },
  {
    icon: "📊",
    title: "Embrace Analytics & SEO",
    description:
      "61% of marketers prioritize SEO. Use Google Analytics and Search Console to understand behavior and improve content visibility.",
  },
  {
    icon: "🚀",
    title: "Go Digital with Your Services",
    description:
      "Online booking and digital consultations increase accessibility and efficiency. It’s not just convenient—it’s expected.",
  },
];

export default function SmallBusinessTips() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Small Business Growth Tips
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
        Learn how to improve your digital strategy and attract more clients.
      </Typography>
      <Box
        sx={{
          flex: 1,
          p: { xs: 0, md: 3 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                backgroundColor: index % 2 === 0 ? "#f4f6f8" : "#e9ecef",
                borderRadius: 3,
                p: 3,
                m: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 30px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {tip.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tip.description}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}
