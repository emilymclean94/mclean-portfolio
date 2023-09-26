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

        {/* StreamVerse Card */}

        <ProjectCards
          image="/movie-stock.jpg"
          title="StreamVerse"
          description="The StreamVerse app allows users to search, track, and organize movies they've watched by adding them to different lists (e.g., watched movies and movies to watch)."
          github="https://github.com/emilymclean94/stream_verse"
          app="https://streamversee.herokuapp.com/"
        />
      </Grid>

      {/* Event Ease Card */}

      <Grid item xs={11} s={6} md={3}>
        <ProjectCards
          image="/event-stock.jpg"
          title="Event Ease"
          description="This Event Planner is a web application built using MySQL, Node.js, and follows the MVC (Model-View-Controller) pattern. It allows users to plan and manage events, keeping track of attendees, RSVPs, and event details."
          github="https://github.com/keelyybug/Event-Ease"
          app="https://event-ease.herokuapp.com/"
        />
      </Grid>

      {/* Player One Reads Card */}
      
      <Grid item xs={11} s={6} md={3}>
        <ProjectCards
          image="/book-stock.jpg"
          title="Player One Reads"
          description="This is a simple web application that generates book suggestions based upon the user's video game interests. Users can narrow down results by category."
          github="https://github.com/EGARRISXN/Player-One-Reads"
          app="https://egarrisxn.github.io/Player-One-Reads/"
        />
      </Grid>
    </Grid>
  );
}

export default Portfolio;
