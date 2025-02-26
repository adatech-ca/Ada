"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 220;
const navItems = ["Home", "Services", "About Us"];

export default function Header() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />

      {/* 🎥 Video Background Inside Header Only */}
      <Box
        sx={{
          position: "absolute", // Keeps it inside the header
          top: 0,
          left: 0,
          width: "100%",
          height: "100%", 
          overflow: "hidden", // Ensures video doesn't spread
          zIndex: -1, // Keeps video behind navbar content
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/ada.mp4" type="video/mp4" />
        </video>
      </Box>
      <AppBar
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1100,
          background: "rgba(0, 0, 0, 0)", 
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          height: "250px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            px: 2,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": { color: theme.palette.primary.main },
            }}
            onClick={() => handleNavClick("Home")}
          >
            ADA Tech
          </Typography>

          {/* 🖥 Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  textTransform: "none",
                  transition: "color 0.2s ease-in-out",
                  "&:hover": { color: theme.palette.primary.main },
                }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* 📱 Mobile Drawer Navigation */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "rgba(17, 25, 40, 0.9)",
            backdropFilter: "blur(15px)",
            color: "white",
          },
        }}
      >
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, cursor: "pointer" }}
            onClick={() => {
              handleNavClick("Home");
              setMobileOpen(false);
            }}
          >
            ADA Tech
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleNavClick(item);
                    setMobileOpen(false);
                  }}
                  sx={{
                    textAlign: "center",
                    color: "rgba(255,255,255,0.8)",
                    transition: "color 0.2s",
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}