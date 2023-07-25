"use client";
import "../global.css";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      h1: "50px",
      h3: "20px",
    },
    [theme.breakpoints.up('md')]: {
      h1: "70px",
      h3: "30px"
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
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
                      <Link onClick={handleCloseNavMenu} href="/about">
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
                  <Link className="home-link" href="/about">
                    About Me |
                  </Link>
                </CustomButton>
                <CustomButton sx={{ my: 2, color: "white", display: "block" }}>
                  <Link className="home-link" href="/portfolio">
                    Portfolio |
                  </Link>
                </CustomButton>
                <CustomButton sx={{ my: 2, color: "white", display: "block" }}>
                  <Link className="home-link" href="/contact">
                    Contact |
                  </Link>
                </CustomButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>

      {/* Main container with name and title */}
      <Grid>
        <Grid item
        className="title-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <h1 
          // style={{ margin: 2, fontSize: "70px", letterSpacing: 10 }}
          className="home-title">
            EMILY McLEAN
          </h1>
          <h3 
          // style={{ margin: 2, fontSize: "30px", letterSpacing: 10 }}
          className="home-subtitle">
            Fullstack Developer
          </h3>
        </Grid>
      </Grid>

      {/* Bottom nav and social links */}
      <footer>
        <Box
          sx={{
            width: "auto",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "center"
          }}
          display="flex"
        >
          <BottomNavigation
            showLabels
            display="flex"
            style={{ background: "transparent", boxShadow: "none", justifyContent: "center" }}
          >
            <BottomNavigationAction
              className="home-link"
              label="GitHub"
              icon={<GitHubIcon />}
              href="https://github.com/emilymclean94"
            />
            <BottomNavigationAction
              className="home-link"
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
