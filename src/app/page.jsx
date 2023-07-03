"use client";
import "./globals.css";
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
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CustomButton = styled(Button)({
  borderRadius: 0,
  borderColor: "#cdcfc0",
  color: "#cdcfc0",
  "&:hover": {
    backgroundColor: "rgb(205, 207, 192, 0.08)",
  },
});

function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <header>

        {/* Navigation Bar */}
        <AppBar
          position="fixed"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
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
                      <Link onClick={handleCloseNavMenu} href="/portfolio">
                        Portfolio
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      <Link onClick={handleCloseNavMenu} href="/Resume">
                        Resume
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      <Link onClick={handleCloseNavMenu} href="/contact">
                        Contact
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>

              {/* Appbar full site */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "flex-end",
                  },
                }}
              >
                <CustomButton sx={{ my: 2, color: "white", display: "block" }}>
                  <Link href="/about_me">About Me |</Link>
                </CustomButton>
                <CustomButton sx={{ my: 2, color: "white", display: "block" }}>
                  <Link href="/portfolio">Portfolio |</Link>
                </CustomButton>
                <CustomButton sx={{ my: 2, color: "white", display: "block" }}>
                  <Link href="/resume">Resume |</Link>
                </CustomButton>
                <CustomButton sx={{ my: 2, color: "white", display: "block" }}>
                  <Link href="/contact">Contact |</Link>
                </CustomButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>

      {/* Main container with name and title */}
      <main>
        <Box
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <h1 style={{ margin: 2, fontSize: "70px", letterSpacing: 10 }}>
            EMILY McLEAN
          </h1>
          <h3 style={{ margin: 2, fontSize: "30px", letterSpacing: 10 }}>
            Fullstack Developer
          </h3>
        </Box>
      </main>

      {/* Bottom nav and social links */}
      <footer>
      <Box
      sx={{ width: "auto", position: "fixed", bottom: 0, left: 0, right: 0 }}
      display="flex"
      // justifyContent="center"
    >
      <BottomNavigation 
      showLabels 
      display="flex" 
      // justifyContent="center"
      style={{ background: 'transparent', boxShadow: 'none'}}
      >
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHubIcon />}
          href="https://github.com/emilymclean94"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/emily-mclean-2a4896100/"
        />
      </BottomNavigation>
    </Box>
      </footer>
    </div>
  );
}

export default Home;

//! Welcome to the Pseudo Code!!

// DONE: Import Link
// <Link href="/">Home</Link>
// <Link href="/about">About Me</Link>
// <Link href="/portfolio">Portfolio</Link>
// <Link href="/resume">Resume</Link>
// <Link href="/contact">Contact Me</Link>

// TODO: Header/Navbar
//  Full name links to homepage
//  Link to About
//  Link to Portfolio
//  Link to Resume
//  Link to contact form
// ? onHover for all nav links
// ? onHover for name in top left to link to homepage
// ? onClick
// ? Toggle hamburger menu

// TODO: Footer
// ? Github link
// * href link
// ? LinkedIn Link
//* href link

// TODO: Main <div> for intro
// ? <div> for all contents
// ? <div> for intro text
// ? <div> for button
// * onClick and event handler

// TODO: Button to route to portfolio page
// ? Link from homepage to portfolio
// * onClick and event handler

// TODO: Favicon
