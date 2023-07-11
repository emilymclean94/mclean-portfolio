"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ProjectCards from "../components/ProjectCards";
// import StreamVerse from "../../../public/stream-verse.png";
// import Container from "@mui/material/Container";

function Portfolio() {
  return (
    <Grid container>
      
      <Grid item xs={12} s={6} md={3}>
        <ProjectCards />
      </Grid>
      <Grid item xs={12} s={6} md={3}>
        <ProjectCards />
      </Grid>
      <Grid item xs={12} s={6} md={3}>
        <ProjectCards />
      </Grid>
    
    </Grid>
  );
}

export default Portfolio;

// ! Welcome to the Pseudo Code!

// TODO: Project cards
// ! not sure if I want an onHover to show links to github/deployed app or just link in description
// ? containing <div>
// ? <img>
// * onHover or onMouseOver? project image display div containing github repo link and deployed app link (both will be icons)
// ? <div> with two icons and a semi-opaque background - Z INDEX TO DISPLAY ON TOP. Need absolute positioning??
// * href link to github repo
// * href link to deployed app
// ? <heading> for title of project
// ? <p> for description of project
