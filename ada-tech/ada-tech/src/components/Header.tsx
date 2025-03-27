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
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 220;
const navItems = ["Services", "Survey"];

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
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image src="/adatechlogo.png" alt="Ada Tech" width={100} height={100} />
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
              gap:3,
              ml:"3rem"
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
                  fontSize: "1rem",
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
