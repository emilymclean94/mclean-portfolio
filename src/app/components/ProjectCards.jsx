"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import Link from "next/link";
import "../global.css";
import "../(business)/portfolio/portfolio.css";

const styles = {
  projectCard: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    color: "#c8c2a7",
  }
};

function ProjectCards({ image, title, description, github, app }) {
  return (
    <>
    <Card style={styles.projectCard}
    sx={{width: "300px"}}>
      <CardMedia
        component="img"
        height="250px"
        width="300px"
        image={image}
        alt="project screenshot"
        // sx={{backgroundColor: ""}}
      />
      <CardContent
      sx={{backgroundColor: "#423f32"}}>
        <Typography gutterBottom variant="h5" component="div">
          <h2>{title}</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={22}>
          <p>{description}</p>
        </Typography>

        {/* Project Links */}

        <div className="external-icons">
          <Link href={github}>
            <FaGithub size="35" color="#c8c2a7" />
          </Link>

          <Link href={app}>
            <FaExternalLinkSquareAlt size="35" color="#c8c2a7" />
          </Link>
        </div>
      </CardContent>
    </Card>
    </>
  );
}

export default ProjectCards;
