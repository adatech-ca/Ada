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
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";


const drawerWidth = 220;
const navItems = ["Home", "Services","Contact", "Careers", "Projects"];

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
      <AppBar
        component="nav"
        sx={{
          position: "absolute",
          top: 1,
          width: "100%",
          zIndex: 1100,
          boxShadow: "none",
          height: "90px",
          backgroundColor: "transparent",
          backdropFilter: "blur(15px)"
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            src="/adatechlogo.png"
            alt="Ada Tech"
            width={100}
            height={100}
      
          />
          <Typography
            variant="h5"
            component="div"
            sx={{
              pl:1,
              fontWeight: 900,
              letterSpacing: "0.5px",
              color: "#111",
              cursor: "pointer",
              transition: "color 0.3s",
              "&:hover": { color: "#000" },
            }}
            onClick={() => handleNavClick("Home")}
          >
            ADA Tech
          </Typography>
          <IconButton
  color="inherit"
  aria-label="open drawer"
  edge="end"
  onClick={handleDrawerToggle}
  sx={{
    display: "block",
    ml: "auto",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "12px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.35)",
      transform: "scale(1.05)",
    },
  }}
>
  <MenuIcon sx={{ color: "#111", fontSize: "1.8rem" }} />
</IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: "block", 
          "& .MuiDrawer-paper": {
            width: "100%",
            mt: "95px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            color: "#111",
            boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Box sx={{ textAlign: "left", mt: 9 }}>
  
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                onClick={() => {
                    const path = item.toLowerCase().replace(/\s+/g, '-');
                    window.location.href = path === "home" ? "/" : `/${path}`;
                    setMobileOpen(false);
                  }}
                  sx={{
                    textAlign: "center",
                    color: "rgba(17,17,17,0.8)",
                    transition: "color 0.2s",
                    "&:hover": { backgroundColor: "#eee", color: "#000" },
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
