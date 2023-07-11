"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const styles = {
    projectCard: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      height: "auto",
      width: "auto",
      backgroundColor: "rgb(66, 63, 50, 0.25)",
    },
    screenshotBg: {
      backgroundColor: "rgb(66, 63, 50, 0.5)",
    },
  };

function ProjectCards({ image, title, description}) {
  return (
    <Card style={styles.projectCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image={image}
          alt="project screenshot"
            style={styles.screenshotBg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2>{title}</h2>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>{description}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCards;
