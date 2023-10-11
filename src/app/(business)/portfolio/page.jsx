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
          image="/noteTaker-Home.png"
          title="Express Note Taker"
          description="An application made with Express.js for users to create. save, and delete notes."
          github="https://github.com/emilymclean94/Express-Note-Taker"
          app="https://still-earth-99016.herokuapp.com/"
        />
        {/* StreamVerse Card */}

        {/* <ProjectCards
          image="/movie-stock.jpg"
          title="StreamVerse"
          description="The StreamVerse app allows users to search, track, and organize movies they've watched by adding them to different lists (e.g., watched movies and movies to watch)."
          github="https://github.com/emilymclean94/stream_verse"
          app="https://streamversee.herokuapp.com/"
        /> */}
      </Grid>

      {/* Event Ease Card */}

      <Grid item xs={11} s={6} md={3}>

      <ProjectCards
          image="/password-generator.jpg"
          title="Password Generator"
          description="An application for generating a unique password with window prompts."
          github="https://github.com/emilymclean94/password_generator"
          app="https://emilymclean94.github.io/password_generator/"
        />

        {/* <ProjectCards
          image="/event-stock.jpg"
          title="Event Ease"
          description="This Event Planner is a web application built using MySQL, Node.js, and follows the MVC (Model-View-Controller) pattern. It allows users to plan and manage events, keeping track of attendees, RSVPs, and event details."
          github="https://github.com/keelyybug/Event-Ease"
          app="https://event-ease.herokuapp.com/"
        /> */}
      </Grid>

      {/* Player One Reads Card */}
      
      <Grid item xs={11} s={6} md={3}>
        <ProjectCards
          image="/player-one-home.png"
          title="Player One Reads"
          description="An application that generates book suggestions based upon the user's video game interests."
          github="https://github.com/EGARRISXN/Player-One-Reads"
          app="https://egarrisxn.github.io/Player-One-Reads/"
        />
      </Grid>
    </Grid>
  );
}

export default Portfolio;
