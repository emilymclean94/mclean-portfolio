"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";

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
  buttonPosition: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  links: {
    color: "#c8c2a7",
    borderColor: "#cdcfc0",
    border: "solid 3px",
    fontWeight: "bold",
    '&:hover': {
      backgroundColor: "rgb(66, 63, 50, 0.08)" 
    }
  },
};

function ProjectCards({ image, title, description, github, app }) {
  return (
    <Card style={styles.projectCard}>
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

        {/* Project Links */}

        <div style={styles.buttonPosition}>
          <Link href={github}>
            <Button variant="outlined" size="small" style={styles.links}>
              <FaGithub />
              Github
            </Button>
          </Link>

          <Link href={app}>
            <Button variant="outlined" size="small" style={styles.links}>
              <CgWebsite />
              Application
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCards;
