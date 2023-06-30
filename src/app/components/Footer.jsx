"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "auto", position: "fixed", bottom: 0, left: 0, right: 0 }} 
    display="flex"
    justifyContent="center">
      <BottomNavigation 
      showLabels
      display="flex"
      justifyContent="center">
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
