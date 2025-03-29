"use client";

import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          50% { transform: rotate(-1deg); }
          75% { transform: rotate(1deg); }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <Container maxWidth="md" sx={{ py: 8, backgroundColor: "#f9fafb" }}>
        <Box
          sx={{
            height: "100%",
            background: "#ffffff",
            flex: 1,
            px: { xs: 2, md: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: "#0f172a",
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              Empowering Businesses with Smart Digital Solutions
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#475569",
                maxWidth: "700px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Whether you're a growing startup or an established enterprise, our mission is simple: equip you with powerful digital tools to thrive in a connected world. From building trust online to driving real engagement, we deliver design and technology that adapts to your scale and vision.
            </Typography>
          </Box>
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
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 2,
                  p: 3,
                  mb: 2,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
                  },
                }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <Typography
                  variant="h6"
                  fontWeight="medium"
                  sx={{
                    mb: 0.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#1e293b",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{tip.icon}</span> {tip.title}
                </Typography>
                {expandedIndex === index && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4b5563",
                      mt: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {tip.description}
                  </Typography>
                )}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </>
  );
}
