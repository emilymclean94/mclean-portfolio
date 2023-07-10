"use client";
import * as React from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from "@mui/material/Container";

const styles = {
  container: {
    color: "#423f32",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    height: "100vh",
    alignContent: "center",
  },
  projectCard: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    backgroundColor: "rgb(66, 63, 50, 0.25)",
  },
  screenshotBg: {
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
    <Container style={styles.container}>
    <Card sx={{ maxWidth: 400 }} style={styles.projectCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image="/stream-verse.png"
          alt="stream verse screenshot"
          style={styles.screenshotBg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            More info about project
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400 }} style={styles.projectCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/event-ease.png"
          alt="Event Ease screenshot"
          style={styles.screenshotBg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            More info about project
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400 }} style={styles.projectCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="player-one-reads.png "
          alt="Player One Reads screenshot"
          style={styles.screenshotBg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            More info about project
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
    // <Grid container style={styles.container}>
    //   <Grid item xs={3} style={styles.projectCard}>
    //     <Box>
    //       <Box style={styles.screenshotBg}>
    //         <h1>Screenshot 1</h1>
    //       </Box>
    //       <h1>Project Title</h1>
    //     </Box>
    //   </Grid>
    //   <Grid item xs={3} style={styles.projectCard}>
    //     <Box style={styles.screenshotBg}>
    //       <h1>Screenshot 2</h1>
    //     </Box>
    //     <h1>Project Title</h1>
    //   </Grid>
    //   <Grid item xs={3} style={styles.projectCard}>
    //     <Box style={styles.screenshotBg}>
    //       <h1>Screenshot 3</h1>
    //     </Box>
    //     <h1>Project Title</h1>
    //   </Grid>
    // </Grid>
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
// ? info <div>
// ? <heading> for title of project
// ? <p> for description of project
