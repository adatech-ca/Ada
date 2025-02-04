"use client";

import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [fullName, setFullName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [socialMedia, setSocialMedia] = useState("");

  const businessOptions = [
    "Retail",
    "E-Commerce",
    "Consulting",
    "Tech Startup",
    "Health & Wellness",
    "Other",
  ];

  const handleSubmit = () => {
    console.log({
      fullName,
      businessType,
      socialMedia,
      selectedDate: selectedDate?.format("YYYY-MM-DD HH:mm"),
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="booking-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Book Your Free Consultation
        </Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          select
          label="Business Type"
          variant="outlined"
          fullWidth
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          sx={{ mb: 2 }}
        >
          {businessOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Social Media Link (Optional)"
          variant="outlined"
          fullWidth
          value={socialMedia}
          onChange={(e) => setSocialMedia(e.target.value)}
          sx={{ mb: 2 }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Choose Date & Time"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            sx={{ width: "100%", mb: 3 }}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, textTransform: "none", fontWeight: "bold" }}
          onClick={handleSubmit}
        >
          Confirm Booking
        </Button>
      </Box>
    </Modal>
  );
};

export default BookingModal;