"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";

const styles = {
  container: {
    color: "#423f32",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    height: "100vh",
    alignContent: "center",
  },
  aboutContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    backgroundColor: "rgb(66, 63, 50, 0.5)",
  },
};

function Portfolio() {
  return (
    <Grid container style={styles.container}>
    <Grid item xs={3} style={styles.aboutContainer}>
      <h1>Project 1</h1>
    </Grid>
    <Grid item xs={3} style={styles.aboutContainer}>
      <h2>Project 2</h2>
    </Grid>
    <Grid item xs={3} style={styles.aboutContainer}>
      <h2>Project 3</h2>
    </Grid>
  </Grid>
  )
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
        // ? info <div>
            // ? <heading> for title of project
            // ? <p> for description of project
