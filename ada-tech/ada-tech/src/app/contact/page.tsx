"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const handleSubmit = () => {
    console.log({
      fullName,
      phoneNumber,
      selectedDate: selectedDate?.format("YYYY-MM-DD HH:mm"),
    });
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            px: { xs: 3, sm: 8 },
            py: 10,
            borderRadius: 3,
            backgroundColor: "#FFF",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            display: "flex",
            flexDirection: "row",
            gap:10
          }}
        >
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{ mb: 3 }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value.replace(/\D/g, ""))
              }
              sx={{ mb: 3 }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Preferred Date & Time"
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                sx={{ width: "100%", mb: 4 }}
              />
            </LocalizationProvider>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleSubmit}
              sx={{
                fontWeight: "bold",
                py: 1.5,
                borderRadius: 2,
                backgroundColor: "#4F46E5",
                "&:hover": {
                  backgroundColor: "#3730A3",
                },
              }}
            >
              Submit Request
            </Button>
        
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
          <Typography
              variant="h3"
              fontWeight="bold"
              textAlign="center"
              sx={{ mb: 2 }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              textAlign="start"
              sx={{ mb: 3, color: "#555" }}
            >
              Want to know more? <br />
              Get in touch with us to start your journey.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
