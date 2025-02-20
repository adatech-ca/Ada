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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1100,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          height: "60px",
          display: "flex",
          justifyContent: "center",
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
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => handleNavClick("Home")}
          >
            ADA Tech
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  textTransform: "none",
                  transition: "color 0.2s ease-in-out",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            ADA Tech
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={() => handleNavClick(item)}>
                  <ListItemText primary={item} sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
