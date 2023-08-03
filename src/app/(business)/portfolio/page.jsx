"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ProjectCards from "@/app/components/ProjectCards";

const styles = {
  container: {
    color: "#423f32",
    display: "flex",
    justifyContent: "space-evenly",
    height: "100vh",
    alignContent: "center",
  },
};

function Portfolio() {
  return (
    <Grid container style={styles.container}>
      <Grid item xs={11} s={6} md={3}>
        <ProjectCards
          image="/movie-stock.jpg"
          title="StreamVerse"
          description="The StreamVerse app allows the user to access, rate, and add movies to different lists (e.g., watched movies and movies to watch). After login, users can view their bio, saved movie list, and to be watched lists on their own dashboard. When a user searches a movie, they can rate it and save it to their watched list or just add it to their want to watch list. Users can add view friends' recent updates by clicking on their profile in in their friend list."
          github="https://github.com/emilymclean94/movie-nova"
          app="https://streamversee.herokuapp.com/"
        />
      </Grid>
      <Grid item xs={11} s={6} md={3}>
        <ProjectCards
          image="/event-stock.jpg"
          title="Event Ease"
          description="This Event Planner is a web application built using MySQL, Node.js, and follows the MVC (Model-View-Controller) pattern. It allows users to plan and manage events, keeping track of attendees, RSVPs, and event details."
          github="https://github.com/keelyybug/Event-Ease"
          app="https://event-ease.herokuapp.com/"
        />
      </Grid>
      <Grid item xs={11} s={6} md={3}>
        <ProjectCards
          image="/book-stock.jpg"
          title="Player One Reads"
          description="This is a simple web application that generates book suggestions based upon the user's video game interests. The app works when a user inputs the title of a video game and may optionally select to narrow down results by category. The app then takes both inputs and returns three book suggestions and links to Google Books."
          github="https://github.com/EGARRISXN/Player-One-Reads"
          app="https://egarrisxn.github.io/Player-One-Reads/"
        />
      </Grid>
    </Grid>
  );
}

export default Portfolio;

// ! Welcome to the Pseudo Code!

// Project cards
// ! not sure if I want an onHover to show links to github/deployed app or just link in description
//  containing <div>
//  <img>
// * onHover or onMouseOver? project image display div containing github repo link and deployed app link (both will be icons)
// ? <div> with two icons and a semi-opaque background - Z INDEX TO DISPLAY ON TOP. Need absolute positioning??
// * href link to github repo
// * href link to deployed app
//  <heading> for title of project
//  <p> for description of project
