"use client";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Name fullsize page */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Emily McLean
          </Typography>

          {/* Appbar Full */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">
                  <Link onClick={handleCloseNavMenu} href="/about_me">
                    About Me
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">
                  <Link onClick={handleCloseNavMenu} href="/portfolio">Portfolio</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">
                  <Link onClick={handleCloseNavMenu} href="/Resume">Resume</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">
                  <Link onClick={handleCloseNavMenu} href="/contact">Contact</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Name mobile */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Emily McLean
          </Typography>

          {/* Appbar full site */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="/about_me">About Me</Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="/portfolio">Portfolio</Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="/resume">Resume</Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="/contact">Contact</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
