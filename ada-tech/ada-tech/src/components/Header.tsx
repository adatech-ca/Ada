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
const navItems = ["home", "contact", "team"];

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
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
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
            filter: "brightness(0.4)",
          }}
        >
          <source src="/ada.mp4" type="video/mp4" />
        </video>
      </Box>

      <AppBar
        component="nav"
        sx={{
          position: "fixed",
          top: 1,
          width: "100%",
          zIndex: 1100,
          background: "rgba(255, 255, 255, 0.6)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "none",
          height: "100px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 600,
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

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#111",
                  borderRadius: "50px",
                  px: 3,
                  py: 0.8,
                  fontWeight: 500,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#fff",
                  },
                }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            color: "#111",
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
